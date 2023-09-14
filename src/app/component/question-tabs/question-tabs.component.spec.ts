import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTabsComponent } from './question-tabs.component';

describe('QuestionTabsComponent', () => {
  let component: QuestionTabsComponent;
  let fixture: ComponentFixture<QuestionTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
