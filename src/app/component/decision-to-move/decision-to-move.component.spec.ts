import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionToMoveComponent } from './decision-to-move.component';

describe('DecisionToMoveComponent', () => {
  let component: DecisionToMoveComponent;
  let fixture: ComponentFixture<DecisionToMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionToMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecisionToMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
