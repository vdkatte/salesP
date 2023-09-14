import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionSolutionOverviewComponent } from './present-solution-solution-overview.component';

describe('PresentSolutionSolutionOverviewComponent', () => {
  let component: PresentSolutionSolutionOverviewComponent;
  let fixture: ComponentFixture<PresentSolutionSolutionOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionSolutionOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionSolutionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
