/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FindmeService } from './findme.service';

describe('Service: Findme', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FindmeService]
    });
  });

  it('should ...', inject([FindmeService], (service: FindmeService) => {
    expect(service).toBeTruthy();
  }));
});
