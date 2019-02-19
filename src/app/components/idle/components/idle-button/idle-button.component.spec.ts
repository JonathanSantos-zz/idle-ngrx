import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleButtonComponent } from './idle-button.component';

describe('IdleButtonComponent', () => {
  let component: IdleButtonComponent;
  let fixture: ComponentFixture<IdleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
