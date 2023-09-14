import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsiderOptionsCompareComponent } from './consider-options-compare.component';

describe('ConsiderOptionsCompareComponent', () => {
  let component: ConsiderOptionsCompareComponent;
  let fixture: ComponentFixture<ConsiderOptionsCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsiderOptionsCompareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsiderOptionsCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
