import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionsComponent } from './present-solutions.component';

describe('PresentSolutionsComponent', () => {
  let component: PresentSolutionsComponent;
  let fixture: ComponentFixture<PresentSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
