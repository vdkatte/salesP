import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage1Component } from './stage1.component';

describe('Stage1Component', () => {
  let component: Stage1Component;
  let fixture: ComponentFixture<Stage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
