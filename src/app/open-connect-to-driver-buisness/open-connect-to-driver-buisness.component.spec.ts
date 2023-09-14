import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenConnectToDriverBuisnessComponent } from './open-connect-to-driver-buisness.component';

describe('OpenConnectToDriverBuisnessComponent', () => {
  let component: OpenConnectToDriverBuisnessComponent;
  let fixture: ComponentFixture<OpenConnectToDriverBuisnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenConnectToDriverBuisnessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenConnectToDriverBuisnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
