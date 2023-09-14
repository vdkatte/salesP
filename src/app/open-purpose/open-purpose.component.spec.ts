import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPurposeComponent } from './open-purpose.component';

describe('OpenPurposeComponent', () => {
  let component: OpenPurposeComponent;
  let fixture: ComponentFixture<OpenPurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPurposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
