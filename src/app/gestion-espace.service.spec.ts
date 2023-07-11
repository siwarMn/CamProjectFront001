import { TestBed } from '@angular/core/testing';

import { GestionEspaceService } from './gestion-espace.service';

describe('GestionEspaceService', () => {
  let service: GestionEspaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEspaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
