import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionReconnectDriverImpactComponent } from './present-solution-reconnect-driver-impact.component';

describe('PresentSolutionReconnectDriverImpactComponent', () => {
  let component: PresentSolutionReconnectDriverImpactComponent;
  let fixture: ComponentFixture<PresentSolutionReconnectDriverImpactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionReconnectDriverImpactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionReconnectDriverImpactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
