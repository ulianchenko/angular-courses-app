import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsEditComponent } from './authors-edit.component';

describe('AuthorsEditComponent', () => {
  let component: AuthorsEditComponent;
  let fixture: ComponentFixture<AuthorsEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsEditComponent]
    });
    fixture = TestBed.createComponent(AuthorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
