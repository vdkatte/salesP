import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedDashboardComponent } from './develop-need-dashboard.component';

describe('DevelopNeedDashboardComponent', () => {
  let component: DevelopNeedDashboardComponent;
  let fixture: ComponentFixture<DevelopNeedDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
