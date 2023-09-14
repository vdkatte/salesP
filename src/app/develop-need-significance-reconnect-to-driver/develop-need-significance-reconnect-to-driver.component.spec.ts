import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopNeedSignificanceReconnectToDriverComponent } from './develop-need-significance-reconnect-to-driver.component';

describe('DevelopNeedSignificanceReconnectToDriverComponent', () => {
  let component: DevelopNeedSignificanceReconnectToDriverComponent;
  let fixture: ComponentFixture<DevelopNeedSignificanceReconnectToDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopNeedSignificanceReconnectToDriverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopNeedSignificanceReconnectToDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
