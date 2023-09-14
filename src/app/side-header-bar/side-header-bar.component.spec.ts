import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideHeaderBarComponent } from './side-header-bar.component';

describe('SideHeaderBarComponent', () => {
  let component: SideHeaderBarComponent;
  let fixture: ComponentFixture<SideHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideHeaderBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
