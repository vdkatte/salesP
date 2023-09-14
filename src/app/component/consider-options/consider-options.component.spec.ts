import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderOptionsComponent } from './consider-options.component';

describe('ConsiderOptionsComponent', () => {
  let component: ConsiderOptionsComponent;
  let fixture: ComponentFixture<ConsiderOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsiderOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
