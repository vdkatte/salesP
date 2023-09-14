import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedSignificanceLossNGainsComponent } from './develop-need-significance-loss-n-gains.component';

describe('DevelopNeedSignificanceLossNGainsComponent', () => {
  let component: DevelopNeedSignificanceLossNGainsComponent;
  let fixture: ComponentFixture<DevelopNeedSignificanceLossNGainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedSignificanceLossNGainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedSignificanceLossNGainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
