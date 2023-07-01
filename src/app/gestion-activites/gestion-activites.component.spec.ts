import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActivitesComponent } from './gestion-activites.component';

describe('GestionActivitesComponent', () => {
  let component: GestionActivitesComponent;
  let fixture: ComponentFixture<GestionActivitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionActivitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
