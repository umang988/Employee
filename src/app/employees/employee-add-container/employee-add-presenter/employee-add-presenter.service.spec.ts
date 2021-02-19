import { TestBed } from '@angular/core/testing';

import { EmployeeAddPresenterService } from './employee-add-presenter.service';

describe('EmployeeAddPresenterService', () => {
  let service: EmployeeAddPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeAddPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
