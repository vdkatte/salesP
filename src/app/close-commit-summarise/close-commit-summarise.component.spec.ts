import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCommitSummariseComponent } from './close-commit-summarise.component';

describe('CloseCommitSummariseComponent', () => {
  let component: CloseCommitSummariseComponent;
  let fixture: ComponentFixture<CloseCommitSummariseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseCommitSummariseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseCommitSummariseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
