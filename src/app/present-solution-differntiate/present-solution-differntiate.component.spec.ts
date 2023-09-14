import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionDifferntiateComponent } from './present-solution-differntiate.component';

describe('PresentSolutionDifferntiateComponent', () => {
  let component: PresentSolutionDifferntiateComponent;
  let fixture: ComponentFixture<PresentSolutionDifferntiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionDifferntiateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionDifferntiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
