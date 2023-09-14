import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionSolutionCriticalIssueComponent } from './present-solution-solution-critical-issue.component';

describe('PresentSolutionSolutionCriticalIssueComponent', () => {
  let component: PresentSolutionSolutionCriticalIssueComponent;
  let fixture: ComponentFixture<PresentSolutionSolutionCriticalIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionSolutionCriticalIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionSolutionCriticalIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
