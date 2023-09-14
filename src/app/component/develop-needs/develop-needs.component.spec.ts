import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedsComponent } from './develop-needs.component';

describe('DevelopNeedsComponent', () => {
  let component: DevelopNeedsComponent;
  let fixture: ComponentFixture<DevelopNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
