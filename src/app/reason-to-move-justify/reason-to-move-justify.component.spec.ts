import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonToMoveJustifyComponent } from './reason-to-move-justify.component';

describe('ReasonToMoveJustifyComponent', () => {
  let component: ReasonToMoveJustifyComponent;
  let fixture: ComponentFixture<ReasonToMoveJustifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonToMoveJustifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonToMoveJustifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
