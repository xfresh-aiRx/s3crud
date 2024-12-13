import { TestBed } from '@angular/core/testing';

import { S3CrudApiServiceService } from './s3-crud-api-service.service';

describe('S3CrudApiServiceService', () => {
  let service: S3CrudApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(S3CrudApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
