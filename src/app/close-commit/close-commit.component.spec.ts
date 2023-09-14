import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseCommitComponent } from './close-commit.component';

describe('CloseCommitComponent', () => {
  let component: CloseCommitComponent;
  let fixture: ComponentFixture<CloseCommitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseCommitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
