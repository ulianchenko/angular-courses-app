import { TestBed } from '@angular/core/testing';

import { CoursesItemDataService } from './courses-item-data.service';

describe('CoursesItemDataService', () => {
  let service: CoursesItemDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesItemDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
