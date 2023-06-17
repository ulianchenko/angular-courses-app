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
  onInput(event: any) {
    this.inputText = event.target.value;
  }
  onFocusInput() {
    this.showIcon = false;
  }
  onBlurInput() {
    this.showIcon = true;
  }
}
