import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedRequirementFrameworkComponent } from './develop-need-requirement-framework.component';

describe('DevelopNeedRequirementFrameworkComponent', () => {
  let component: DevelopNeedRequirementFrameworkComponent;
  let fixture: ComponentFixture<DevelopNeedRequirementFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedRequirementFrameworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedRequirementFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
