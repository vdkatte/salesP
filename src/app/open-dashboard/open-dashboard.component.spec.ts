import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDashboardComponent } from './open-dashboard.component';

describe('OpenDashboardComponent', () => {
  let component: OpenDashboardComponent;
  let fixture: ComponentFixture<OpenDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
