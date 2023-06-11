import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent {
  inputText: string = '';
  showIcon: string = 'inline-block';

  onClickSearch() {
    console.log(this.inputText);
    this.inputText = '';
  }
  onFocusInput() {
    this.showIcon = '';
  }
  onBlurInput() {
    this.showIcon = 'inline-block';
  }
}
