import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage3DashboardComponent } from './stage3-dashboard.component';

describe('Stage3DashboardComponent', () => {
  let component: Stage3DashboardComponent;
  let fixture: ComponentFixture<Stage3DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage3DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage3DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
