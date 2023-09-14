import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedRequirementImportanceComponent } from './develop-need-requirement-importance.component';

describe('DevelopNeedRequirementImportanceComponent', () => {
  let component: DevelopNeedRequirementImportanceComponent;
  let fixture: ComponentFixture<DevelopNeedRequirementImportanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedRequirementImportanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedRequirementImportanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
