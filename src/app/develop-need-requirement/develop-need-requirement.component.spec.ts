import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedRequirementComponent } from './develop-need-requirement.component';

describe('DevelopNeedRequirementComponent', () => {
  let component: DevelopNeedRequirementComponent;
  let fixture: ComponentFixture<DevelopNeedRequirementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedRequirementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
