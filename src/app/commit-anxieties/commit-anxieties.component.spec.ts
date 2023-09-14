import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitAnxietiesComponent } from './commit-anxieties.component';

describe('CommitAnxietiesComponent', () => {
  let component: CommitAnxietiesComponent;
  let fixture: ComponentFixture<CommitAnxietiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitAnxietiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommitAnxietiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
