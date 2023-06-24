import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LogoComponent } from '../../components/header/logo/logo.component';
import { BreadcrumbsComponent } from '../../components/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { IfAuthenticatedDirective } from '../../../shared/directives/if-authenticated.directive';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginPageComponent,
        HeaderComponent,
        LogoComponent,
        BreadcrumbsComponent,
        FooterComponent,
        IfAuthenticatedDirective
      ]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onClickLogin change isAuth to true', () => {
    component.onClickLogin();
    expect(component.isAuth).toBeTrue();
  });

  it('should call onInputEmail', () => {
    spyOn(component, 'onInputEmail');
    const input = fixture.debugElement.query(
      By.css('.login__container_email input')
    );
    input.nativeElement.value = 'trigger input event';
    input.triggerEventHandler('input', { target: input.nativeElement });
    fixture.detectChanges();
    expect(component.onInputEmail).toHaveBeenCalled();
  });

  it('should call onInputPassword', () => {
    spyOn(component, 'onInputPassword');
    const input = fixture.debugElement.query(
      By.css('.login__container_password input')
    );
    console.log(input);
    input.nativeElement.value = 'trigger password input event';
    fixture.detectChanges();
    input.triggerEventHandler('input', { target: input.nativeElement });
    expect(component.onInputPassword).toHaveBeenCalled();
  });
});
