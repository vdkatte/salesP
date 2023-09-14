import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage4Component } from './stage4.component';

describe('Stage4Component', () => {
  let component: Stage4Component;
  let fixture: ComponentFixture<Stage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
