import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseNegotiationAlternativesComponent } from './close-negotiation-alternatives.component';

describe('CloseNegotiationAlternativesComponent', () => {
  let component: CloseNegotiationAlternativesComponent;
  let fixture: ComponentFixture<CloseNegotiationAlternativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseNegotiationAlternativesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseNegotiationAlternativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
