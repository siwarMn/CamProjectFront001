import { TestBed } from '@angular/core/testing';

import { GestionActiviteService } from './gestion-activite.service';

describe('GestionActiviteService', () => {
  let service: GestionActiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionActiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
