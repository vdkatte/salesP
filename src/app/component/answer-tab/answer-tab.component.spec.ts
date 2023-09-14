import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTabComponent } from './answer-tab.component';
import * as XLSX from 'xlsx'
describe('AnswerTabComponent', () => {
  let component: AnswerTabComponent;
  let fixture: ComponentFixture<AnswerTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
