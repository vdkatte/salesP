import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseConcernsSpecifiesComponent } from './close-concerns-specifies.component';

describe('CloseConcernsSpecifiesComponent', () => {
  let component: CloseConcernsSpecifiesComponent;
  let fixture: ComponentFixture<CloseConcernsSpecifiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseConcernsSpecifiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseConcernsSpecifiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
