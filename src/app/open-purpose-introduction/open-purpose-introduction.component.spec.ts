import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPurposeIntroductionComponent } from './open-purpose-introduction.component';

describe('OpenPurposeIntroductionComponent', () => {
  let component: OpenPurposeIntroductionComponent;
  let fixture: ComponentFixture<OpenPurposeIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPurposeIntroductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPurposeIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
