import { TestBed } from '@angular/core/testing';

import { MioServizioService } from './mio-servizio.service';

describe('MioServizioService', () => {
  let service: MioServizioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MioServizioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
