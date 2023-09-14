import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AdminServiceService } from 'src/app/service/admin-service.service';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.css'],
})
export class AdminUserFormComponent implements OnInit {
  adminForm: any;
  constructor(
    private fb: FormBuilder,
    private adminService: AdminServiceService
  ) {
    this.adminForm = fb.group({
      question: [''],
      option1: [''],
      mark1: [''],
      option2: [''],
      mark2: [''],
      option3: [''],
      mark3: [''],
      option4: [''],
      mark4: [''],
      option5: [''],
      mark5: [''],
      category: [''],
    });
  }

  ngOnInit(): void {}
  submitform() {
    console.log(this.adminForm);
    let optionArray = [
      {
        option: this.adminForm.value.option1,
        mark: this.adminForm.value.mark1,
      },
      {
        option: this.adminForm.value.option2,
        mark: this.adminForm.value.mark2,
      },
      {
        option: this.adminForm.value.option3,
        mark: this.adminForm.value.mark3,
      },
      {
        option: this.adminForm.value.option4,
        mark: this.adminForm.value.mark4,
      },
      {
        option: this.adminForm.value.option5,
        mark: this.adminForm.value.mark5,
      },
    ];
    let data = {
      question: this.adminForm.value.question,
      option: optionArray,
      category: this.adminForm.value.category,
    };
    this.adminService.postQuestion(data).subscribe((res: any) => {
      console.log(res);
      this.adminForm.reset();
    });
  }
  clearform() {
    this.adminForm.value.option1.reset();
    this.adminForm.value.option2.reset();
    this.adminForm.value.option3.reset();
    this.adminForm.value.option4.reset();
    this.adminForm.value.option5.reset();
  }
}
