import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComitComponent } from './comit.component';

describe('ComitComponent', () => {
  let component: ComitComponent;
  let fixture: ComponentFixture<ComitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
