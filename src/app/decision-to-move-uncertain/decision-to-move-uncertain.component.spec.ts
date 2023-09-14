import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionToMoveUncertainComponent } from './decision-to-move-uncertain.component';

describe('DecisionToMoveUncertainComponent', () => {
  let component: DecisionToMoveUncertainComponent;
  let fixture: ComponentFixture<DecisionToMoveUncertainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionToMoveUncertainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionToMoveUncertainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
