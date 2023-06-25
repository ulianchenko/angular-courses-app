import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { BreadcrumbsComponent } from '../breadcrumbs/breadcrumbs.component';
import { IfAuthenticatedDirective } from '../../../shared/directives/if-authenticated.directive';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LogoComponent,
        BreadcrumbsComponent,
        IfAuthenticatedDirective
      ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
