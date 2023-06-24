import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() isAuth: boolean = false;
  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuthenticated();
  }
}
