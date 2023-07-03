import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreadCrumb } from '../../models/breadcrumb.model';
import { Subscription } from 'rxjs';
import { BreadcrumbService } from '../../services/breadcrumb.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  breadcrumbs?: BreadCrumb[];
  breadcrumbSub!: Subscription;

  constructor(
    // eslint-disable-next-line no-unused-vars
    private breadcrumbService: BreadcrumbService
  ) {}

  ngOnInit(): void {
    this.breadcrumbs = this.breadcrumbService.breadcrumbs;
    this.breadcrumbSub = this.breadcrumbService
      .getBreadcrumbs()
      .subscribe((breadcrumbsArr: BreadCrumb[]) => {
        this.breadcrumbs = breadcrumbsArr;
      });
  }

  ngOnDestroy(): void {
    this.breadcrumbSub.unsubscribe();
  }
}
