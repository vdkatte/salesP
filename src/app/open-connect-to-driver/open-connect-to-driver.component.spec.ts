import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenConnectToDriverComponent } from './open-connect-to-driver.component';

describe('OpenConnectToDriverComponent', () => {
  let component: OpenConnectToDriverComponent;
  let fixture: ComponentFixture<OpenConnectToDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenConnectToDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenConnectToDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
