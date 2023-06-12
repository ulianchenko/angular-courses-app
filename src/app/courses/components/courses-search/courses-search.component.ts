import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent {
  inputText: string = '';
  showIcon: boolean = true;

  onClickSearch() {
    console.log(this.inputText);
    this.inputText = '';
  }
  onFocusInput() {
    this.showIcon = false;
  }
  onBlurInput() {
    this.showIcon = true;
  }
}
