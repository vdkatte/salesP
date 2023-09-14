import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stage1DashboardComponent } from './stage1-dashboard.component';

describe('Stage1DashboardComponent', () => {
  let component: Stage1DashboardComponent;
  let fixture: ComponentFixture<Stage1DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Stage1DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Stage1DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
