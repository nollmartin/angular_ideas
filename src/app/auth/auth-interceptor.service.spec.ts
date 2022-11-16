/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthInterseptorService } from './auth-interceptor.service';

describe('Service: AuthInterseptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInterseptorService],
    });
  });

  it('should ...', inject(
    [AuthInterseptorService],
    (service: AuthInterseptorService) => {
      expect(service).toBeTruthy();
    }
  ));
});
