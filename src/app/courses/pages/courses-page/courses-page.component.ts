import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  onClickLoadMore() {
    console.log('Load more');
  }

  onClickDeleteCard(id: any) {
    console.log(`Card ${id} was deleted`);
  }
}
