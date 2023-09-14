import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseNegotiationComponent } from './close-negotiation.component';

describe('CloseNegotiationComponent', () => {
  let component: CloseNegotiationComponent;
  let fixture: ComponentFixture<CloseNegotiationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseNegotiationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseNegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
