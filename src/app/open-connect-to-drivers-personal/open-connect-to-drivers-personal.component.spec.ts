import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenConnectToDriversPersonalComponent } from './open-connect-to-drivers-personal.component';

describe('OpenConnectToDriversPersonalComponent', () => {
  let component: OpenConnectToDriversPersonalComponent;
  let fixture: ComponentFixture<OpenConnectToDriversPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenConnectToDriversPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenConnectToDriversPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
