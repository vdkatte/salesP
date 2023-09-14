import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentSolutionReconnectDriverExampleComponent } from './present-solution-reconnect-driver-example.component';

describe('PresentSolutionReconnectDriverExampleComponent', () => {
  let component: PresentSolutionReconnectDriverExampleComponent;
  let fixture: ComponentFixture<PresentSolutionReconnectDriverExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentSolutionReconnectDriverExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentSolutionReconnectDriverExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
