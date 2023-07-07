import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit, OnDestroy {
  courses: Course[] = [];
  deleteCourseConfirmation: boolean = false;
  coursesSub!: Subscription;
  @Output() cardToEdit = new EventEmitter();

  // eslint-disable-next-line no-unused-vars
  constructor(private coursesService: CoursesService, private router: Router) {}

  ngOnInit() {
    this.coursesSub = this.coursesService
      .getCoursesList()
      .subscribe((data: any) => {
        this.courses = data;
      });
  }

  ngOnDestroy(): void {
    this.coursesSub.unsubscribe();
  }

  onClickAddCourse(): void {
    const course = this.coursesService.getCourse();
    this.cardToEdit.emit(course);
    this.router.navigateByUrl(`/courses/new`);
  }

  onClickLoadMore(): void {
    this.coursesService.coursesLoadStep += 4;
    this.coursesService
      .getCoursesList()
      .subscribe((data: any) => (this.courses = data));
  }

  onClickEditCard(id: number): void {
    const course = this.coursesService.getCourse(id);
    this.cardToEdit.emit(course);
  }

  onClickDeleteCard(id: number): void {
    this.deleteCourseConfirmation = confirm(
      'Do you really want to delete this course? Yes/No'
    );
    this.coursesService.removeCourse(id).subscribe(() => {
      this.coursesService
        .getCoursesList()
        .subscribe((data: any) => (this.courses = data));
    });
  }

  handleSearchCourses(searchText: string): void {
    this.coursesService.textFragment = searchText;
    this.coursesService.getFilteredCoursesList().subscribe((data: any) => {
      this.courses = data;
    });
  }
}
