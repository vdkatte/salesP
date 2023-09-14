import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage2DashboardComponent } from './stage2-dashboard.component';

describe('Stage2DashboardComponent', () => {
  let component: Stage2DashboardComponent;
  let fixture: ComponentFixture<Stage2DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage2DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage2DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
