import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseConcernsAnticipateComponent } from './close-concerns-anticipate.component';

describe('CloseConcernsAnticipateComponent', () => {
  let component: CloseConcernsAnticipateComponent;
  let fixture: ComponentFixture<CloseConcernsAnticipateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseConcernsAnticipateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseConcernsAnticipateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
