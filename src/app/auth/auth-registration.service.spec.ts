/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthRegistrationService } from './auth-registration.service';

describe('Service: AuthRegistration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRegistrationService]
    });
  });

  it('should ...', inject([AuthRegistrationService], (service: AuthRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
