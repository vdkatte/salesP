import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfullComponent } from './successfull.component';

describe('SuccessfullComponent', () => {
  let component: SuccessfullComponent;
  let fixture: ComponentFixture<SuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
