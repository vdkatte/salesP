import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2Component } from './stage2.component';

describe('Stage2Component', () => {
  let component: Stage2Component;
  let fixture: ComponentFixture<Stage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
