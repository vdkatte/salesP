import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedRequirementSpecifiesComponent } from './develop-need-requirement-specifies.component';

describe('DevelopNeedRequirementSpecifiesComponent', () => {
  let component: DevelopNeedRequirementSpecifiesComponent;
  let fixture: ComponentFixture<DevelopNeedRequirementSpecifiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedRequirementSpecifiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedRequirementSpecifiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
