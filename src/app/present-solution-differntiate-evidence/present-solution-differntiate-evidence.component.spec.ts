import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionDifferntiateEvidenceComponent } from './present-solution-differntiate-evidence.component';

describe('PresentSolutionDifferntiateEvidenceComponent', () => {
  let component: PresentSolutionDifferntiateEvidenceComponent;
  let fixture: ComponentFixture<PresentSolutionDifferntiateEvidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionDifferntiateEvidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionDifferntiateEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
