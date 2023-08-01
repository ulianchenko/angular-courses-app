import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, of, switchMap, tap } from 'rxjs';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { createCourse } from '../../helpers/createCourse';
import { Course } from '../../models/course.model';
import { CoursesService } from '../../services/courses.service';
import {
  createNewCourse,
  updateCourse
} from '../../../store/courses/courses.actions';
import { selectUser } from 'src/app/store/auth/auth.selectors';
import { UserEntity } from '../../../core/models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { AuthorsService } from '../../services/authors.service';
import { Author } from '../../models/author.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnInit, OnDestroy {
  isEdit: boolean = false;
  subscriptions: Subscription[] = [];
  course: Course;
  authors: Author[] = [];
  selectedAuthors: Author[] = [];
  user!: UserEntity | null;
  courseForm: FormGroup;
  isFormDataValid = false;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private route: ActivatedRoute,
    // eslint-disable-next-line no-unused-vars
    private coursesService: CoursesService,
    // eslint-disable-next-line no-unused-vars
    private authorsService: AuthorsService,
    // eslint-disable-next-line no-unused-vars
    private authService: AuthenticationService,
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private store: Store,
    // eslint-disable-next-line no-unused-vars
    private formBuilder: FormBuilder
  ) {
    this.course = this.coursesService.emptyCourse;

    this.courseForm = this.formBuilder.group({
      title: [null, [Validators.required, Validators.maxLength(50)]],
      description: [null, [Validators.required, Validators.maxLength(500)]],
      date: ['', Validators.required],
      duration: [0, Validators.required],
      authors: [[], Validators.required]
    });
  }

  ngOnInit() {
    const routeSub = this.route.params
      .pipe(
        switchMap((params) => {
          const courseId: number = Number(params['id']);
          if (courseId) {
            return this.coursesService.fetchCourse(courseId).pipe(
              tap((data: Course) => {
                const formattedDate = formatDate(
                  data.date,
                  'yyy-M-dd',
                  'en-US'
                );
                this.course = data;
                this.courseForm.patchValue({
                  title: data.name,
                  description: data.description,
                  date: formattedDate,
                  duration: data.length,
                  authors: data.authors
                });
                this.selectedAuthors = this.courseForm.get('authors')?.value;
                this.isEdit = true;
              })
            );
          } else {
            this.course = this.coursesService.emptyCourse;
            this.isEdit = false;
            return of(null);
          }
        })
      )
      .subscribe();
    this.subscriptions.push(routeSub);

    const getUserInfoSub = this.store
      .select(selectUser)
      .subscribe((user: UserEntity | null) => {
        this.user = user;
      });
    this.subscriptions.push(getUserInfoSub);

    const getAuthorsSub = this.authorsService
      .fetchAuthors()
      .subscribe((authorsData) => {
        this.authors = authorsData;
      });
    this.subscriptions.push(getAuthorsSub);

    this.courseForm
      .get('authors')
      ?.valueChanges.subscribe((authors: Author[]) => {
        this.updateFormAuthorsValidity(authors);
      });
    this.updateFormValidity();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onClickSave(): void {
    if (this.courseForm.invalid) {
      return;
    }

    const courseForAdding: Course = createCourse(
      this.isEdit,
      this.course,
      this.courseForm.value
    );
    if (this.isEdit) {
      this.store.dispatch(updateCourse({ newCourse: courseForAdding }));
    } else {
      this.store.dispatch(createNewCourse({ newCourse: courseForAdding }));
      this.course = this.coursesService.emptyCourse;
      this.isEdit = false;
    }

    this.course = this.coursesService.emptyCourse;
    this.router.navigate([this.authService.redirectUrl]);
  }

  onClickCancel(): void {
    this.router.navigate([this.authService.redirectUrl]);
  }

  onInputDate(date: string) {
    this.course!.date = date;
    this.courseForm.patchValue({ date: date || null });
    this.updateFormValidity();
  }

  onInputDuration(duration: string) {
    this.course!.length = Number(duration);
    this.courseForm.patchValue({ duration: duration || null });
    this.updateFormValidity();
  }

  updateFormAuthorsValidity(authors: Author[]) {
    const authorsControl = this.courseForm.get('authors');
    if (authorsControl) {
      if (JSON.stringify(authors) !== JSON.stringify(this.selectedAuthors)) {
        authorsControl.setValue(authors, { emitEvent: false });
        this.selectedAuthors = authors;
      }
    }
    this.updateFormValidity();
  }

  updateFormValidity() {
    const authorsControl = this.courseForm.get('authors');
    const isAuthorsValid =
      authorsControl != null && authorsControl.value.length > 0;

    this.isFormDataValid = this.courseForm.valid && isAuthorsValid;
  }
}
