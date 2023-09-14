import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPurposeEngageWithConceptComponent } from './open-purpose-engage-with-concept.component';

describe('OpenPurposeEngageWithConceptComponent', () => {
  let component: OpenPurposeEngageWithConceptComponent;
  let fixture: ComponentFixture<OpenPurposeEngageWithConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPurposeEngageWithConceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenPurposeEngageWithConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
