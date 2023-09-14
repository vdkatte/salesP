import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseNegotiationAgreementComponent } from './close-negotiation-agreement.component';

describe('CloseNegotiationAgreementComponent', () => {
  let component: CloseNegotiationAgreementComponent;
  let fixture: ComponentFixture<CloseNegotiationAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseNegotiationAgreementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseNegotiationAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
