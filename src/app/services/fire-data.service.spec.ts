/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FireDataService } from './fire-data.service';

describe('Service: FireData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireDataService]
    });
  });

  it('should ...', inject([FireDataService], (service: FireDataService) => {
    expect(service).toBeTruthy();
  }));
});
