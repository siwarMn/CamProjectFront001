import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSujetsComponent } from './gestion-sujets.component';

describe('GestionSujetsComponent', () => {
  let component: GestionSujetsComponent;
  let fixture: ComponentFixture<GestionSujetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionSujetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionSujetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
