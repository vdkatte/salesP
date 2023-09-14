import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAgreeToConsiderComponent } from './open-agree-to-consider.component';

describe('OpenAgreeToConsiderComponent', () => {
  let component: OpenAgreeToConsiderComponent;
  let fixture: ComponentFixture<OpenAgreeToConsiderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenAgreeToConsiderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenAgreeToConsiderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
