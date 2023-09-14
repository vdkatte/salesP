import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionReconnectDriverComponent } from './present-solution-reconnect-driver.component';

describe('PresentSolutionReconnectDriverComponent', () => {
  let component: PresentSolutionReconnectDriverComponent;
  let fixture: ComponentFixture<PresentSolutionReconnectDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionReconnectDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionReconnectDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
