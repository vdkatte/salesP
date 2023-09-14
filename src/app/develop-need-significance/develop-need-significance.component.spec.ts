import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedSignificanceComponent } from './develop-need-significance.component';

describe('DevelopNeedSignificanceComponent', () => {
  let component: DevelopNeedSignificanceComponent;
  let fixture: ComponentFixture<DevelopNeedSignificanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedSignificanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedSignificanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
