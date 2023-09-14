import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionDifferntiateCommanStandardsComponent } from './present-solution-differntiate-comman-standards.component';

describe('PresentSolutionDifferntiateCommanStandardsComponent', () => {
  let component: PresentSolutionDifferntiateCommanStandardsComponent;
  let fixture: ComponentFixture<PresentSolutionDifferntiateCommanStandardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionDifferntiateCommanStandardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionDifferntiateCommanStandardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
