import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage3Component } from './stage3.component';

describe('Stage3Component', () => {
  let component: Stage3Component;
  let fixture: ComponentFixture<Stage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
