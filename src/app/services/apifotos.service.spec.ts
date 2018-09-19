import { TestBed } from '@angular/core/testing';

import { APIFotosService } from './apifotos.service';

describe('APIFotosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIFotosService = TestBed.get(APIFotosService);
    expect(service).toBeTruthy();
  });
});
