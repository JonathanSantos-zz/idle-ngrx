import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleComponent } from './idle.component';

describe('IdleComponent', () => {
  let component: IdleComponent;
  let fixture: ComponentFixture<IdleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
