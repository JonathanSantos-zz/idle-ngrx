import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentsInfoComponent } from './equipments-info.component';

describe('EquipmentsInfoComponent', () => {
  let component: EquipmentsInfoComponent;
  let fixture: ComponentFixture<EquipmentsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipmentsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
