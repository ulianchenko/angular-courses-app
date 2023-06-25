import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should change isAuth to true after login', () => {
    service.login();
    expect(service.isAuth).toBeTruthy();
  });

  it('should change isAuth to false after logout', () => {
    service.login();
    expect(service.isAuth).toBeTrue();
    service.logout();
    expect(service.isAuth).toBeFalse();
  });

  it('should return the isAuth status', () => {
    service.login();
    const authStatus = service.isAuthenticated();
    expect(authStatus).toBeTrue();
  });

  it('should return the isAuth user info', () => {
    service.login();
    const user = service.getUserInfo();
    expect(user.firstName).toBe('Jon');
  });
});
