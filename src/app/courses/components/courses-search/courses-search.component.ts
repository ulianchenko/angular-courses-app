import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, Subscription, debounceTime, of, switchMap } from 'rxjs';
import {
  filterCourses,
  getCourses
} from '../../../store/courses/courses.actions';

@Component({
  selector: 'app-courses-search',
  templateUrl: './courses-search.component.html',
  styleUrls: ['./courses-search.component.scss']
})
export class CoursesSearchComponent implements OnInit, OnDestroy {
  inputText: string = '';
  showIcon: boolean = true;
  subscriptions: Subscription[] = [];
  private searchInputChange: Subject<string> = new Subject<string>();

  // eslint-disable-next-line no-unused-vars
  constructor(private store: Store) {}

  ngOnInit(): void {
    const getUpdatedSearchInput = this.searchInputChange
      .pipe(
        debounceTime(500),
        switchMap((inputText: string) => {
          if (inputText.length > 3) {
            return of(
              this.store.dispatch(
                filterCourses({ searchString: this.inputText })
              )
            );
          } else if (inputText.length === 0) {
            return of(this.store.dispatch(getCourses()));
          } else {
            return of(null);
          }
        })
      )
      .subscribe();
    this.subscriptions.push(getUpdatedSearchInput);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onKeyUp(): void {
    this.searchInputChange.next(this.inputText);
  }

  onInput(event: Event): void {
    this.inputText = (event.target as HTMLInputElement).value;
    this.searchInputChange.next((event.target as HTMLInputElement).value);
  }

  onFocusInput(): void {
    this.showIcon = false;
  }

  onBlurInput(): void {
    this.showIcon = true;
  }
}
