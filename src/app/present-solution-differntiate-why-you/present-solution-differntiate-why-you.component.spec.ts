import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionDifferntiateWhyYouComponent } from './present-solution-differntiate-why-you.component';

describe('PresentSolutionDifferntiateWhyYouComponent', () => {
  let component: PresentSolutionDifferntiateWhyYouComponent;
  let fixture: ComponentFixture<PresentSolutionDifferntiateWhyYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionDifferntiateWhyYouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionDifferntiateWhyYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
