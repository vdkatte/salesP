import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedGapAnalysisClarityComponent } from './develop-need-gap-analysis-clarity.component';

describe('DevelopNeedGapAnalysisClarityComponent', () => {
  let component: DevelopNeedGapAnalysisClarityComponent;
  let fixture: ComponentFixture<DevelopNeedGapAnalysisClarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedGapAnalysisClarityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedGapAnalysisClarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
