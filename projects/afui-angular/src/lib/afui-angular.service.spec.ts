import { TestBed } from '@angular/core/testing';

import { AfuiAngularService } from './afui-angular.service';

describe('AfuiAngularService', () => {
  let service: AfuiAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfuiAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
