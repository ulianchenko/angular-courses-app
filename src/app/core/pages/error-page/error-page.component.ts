import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { setError } from '../../../store/auth/auth.actions';
import { selectError } from '../../../store/auth/auth.selectors';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {
  errorStr: string = '';
  subscriptions: Subscription[] = [];
  constructor(
    // eslint-disable-next-line no-unused-vars
    private router: Router,
    // eslint-disable-next-line no-unused-vars
    private store: Store
  ) {}

  ngOnInit(): void {
    const getErrorStatusSub = this.store
      .select(selectError)
      .subscribe((errorStr: string) => {
        this.errorStr = errorStr;
      });
    this.subscriptions.push(getErrorStatusSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  handleClickBack(): void {
    this.store.dispatch(setError({ errorStr: '' }));
    this.router.navigate(['..']);
  }
}
