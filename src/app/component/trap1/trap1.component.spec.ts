import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trap1Component } from './trap1.component';

describe('Trap1Component', () => {
  let component: Trap1Component;
  let fixture: ComponentFixture<Trap1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trap1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trap1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
