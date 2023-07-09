import { TestBed } from '@angular/core/testing';

import { GestionSujetsService } from './gestion-sujets.service';

describe('GestionSujetsService', () => {
  let service: GestionSujetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionSujetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
