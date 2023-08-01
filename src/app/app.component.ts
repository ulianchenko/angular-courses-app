import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { checkUserToken } from './store/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // eslint-disable-next-line no-unused-vars
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(checkUserToken());
  }
}
