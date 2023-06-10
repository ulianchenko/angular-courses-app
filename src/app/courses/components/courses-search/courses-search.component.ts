import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent {
  placeholderText: string = 'Text to search';
  searchButtonText: string = 'Search';
  searchButtonClass: string = 'search';
  inputText: string = '';
  showIcon: string = 'inline-block';

  onClickSearch() {
    console.log(this.inputText);
    this.inputText = '';
  }
  onFocusInput() {
    this.showIcon = 'none';
  }
  onBlurInput() {
    this.showIcon = 'inline-block';
  }
}
