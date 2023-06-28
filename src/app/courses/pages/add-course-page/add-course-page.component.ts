import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-add-course-page',
  templateUrl: './add-course-page.component.html',
  styleUrls: ['./add-course-page.component.scss']
})
export class AddCoursePageComponent implements OnChanges {
  title: string | undefined;
  description: string | undefined;
  @Input() course?: Course;
  @Output() saveCourse = new EventEmitter();
  @Output() cancelEdit = new EventEmitter();

  ngOnChanges() {
    this.title = this.course?.name;
    this.description = this.course?.description;
  }

  onClickSave(): void {
    this.saveCourse.emit();
  }

  onClickCancel(): void {
    this.cancelEdit.emit();
  }

  handleDeleteAuthor(): void {
    console.log('Author was deleted');
  }

  onInputTitle(event: any) {
    this.title = event.target.value;
  }

  onInputDescription(event: any) {
    this.description = event.target.value;
  }
}
