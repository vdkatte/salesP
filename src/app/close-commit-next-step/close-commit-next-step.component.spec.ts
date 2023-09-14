import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCommitNextStepComponent } from './close-commit-next-step.component';

describe('CloseCommitNextStepComponent', () => {
  let component: CloseCommitNextStepComponent;
  let fixture: ComponentFixture<CloseCommitNextStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseCommitNextStepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseCommitNextStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
