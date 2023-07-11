import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLieuCentreComponent } from './gestion-lieu-centre.component';

describe('GestionLieuCentreComponent', () => {
  let component: GestionLieuCentreComponent;
  let fixture: ComponentFixture<GestionLieuCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLieuCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLieuCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
