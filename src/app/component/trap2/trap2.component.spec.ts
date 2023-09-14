import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trap2Component } from './trap2.component';

describe('Trap2Component', () => {
  let component: Trap2Component;
  let fixture: ComponentFixture<Trap2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trap2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
