import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedGapAnalysisIdealVCurrentComponent } from './develop-need-gap-analysis-ideal-v-current.component';

describe('DevelopNeedGapAnalysisIdealVCurrentComponent', () => {
  let component: DevelopNeedGapAnalysisIdealVCurrentComponent;
  let fixture: ComponentFixture<DevelopNeedGapAnalysisIdealVCurrentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedGapAnalysisIdealVCurrentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedGapAnalysisIdealVCurrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
