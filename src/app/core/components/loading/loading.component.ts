import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {
  isDisplay: boolean = false;
  subscriptions: Subscription[] = [];

  // eslint-disable-next-line no-unused-vars
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    const loadingSub = this.loadingService
      .getLoadingChange()
      .subscribe((loadingStatus: boolean) => {
        this.isDisplay = loadingStatus;
      });
    this.subscriptions.push(loadingSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
