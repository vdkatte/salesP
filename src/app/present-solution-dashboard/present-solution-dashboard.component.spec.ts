import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionDashboardComponent } from './present-solution-dashboard.component';

describe('PresentSolutionDashboardComponent', () => {
  let component: PresentSolutionDashboardComponent;
  let fixture: ComponentFixture<PresentSolutionDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
