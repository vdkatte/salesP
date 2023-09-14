import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionSolutionComponent } from './present-solution-solution.component';

describe('PresentSolutionSolutionComponent', () => {
  let component: PresentSolutionSolutionComponent;
  let fixture: ComponentFixture<PresentSolutionSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
