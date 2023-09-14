import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseConcernsComponent } from './close-concerns.component';

describe('CloseConcernsComponent', () => {
  let component: CloseConcernsComponent;
  let fixture: ComponentFixture<CloseConcernsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseConcernsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseConcernsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
