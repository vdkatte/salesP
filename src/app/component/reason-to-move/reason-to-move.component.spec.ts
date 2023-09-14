import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonToMoveComponent } from './reason-to-move.component';

describe('ReasonToMoveComponent', () => {
  let component: ReasonToMoveComponent;
  let fixture: ComponentFixture<ReasonToMoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonToMoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonToMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
