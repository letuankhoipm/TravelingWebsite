import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFlightComponent } from './card-flight.component';

describe('CardFlightComponent', () => {
  let component: CardFlightComponent;
  let fixture: ComponentFixture<CardFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
