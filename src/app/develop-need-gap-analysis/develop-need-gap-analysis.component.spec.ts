import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedGapAnalysisComponent } from './develop-need-gap-analysis.component';

describe('DevelopNeedGapAnalysisComponent', () => {
  let component: DevelopNeedGapAnalysisComponent;
  let fixture: ComponentFixture<DevelopNeedGapAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedGapAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedGapAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
