import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage4DashboardComponent } from './stage4-dashboard.component';

describe('Stage4DashboardComponent', () => {
  let component: Stage4DashboardComponent;
  let fixture: ComponentFixture<Stage4DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage4DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage4DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
