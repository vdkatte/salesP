import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  signupForm: any;

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private router: Router
  ) {
    this.signupForm = fb.group({
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      emailId: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    if (!this.signupForm.valid) {
      alert('Please Enter Details');
      return;
    }
    this.user.signUp(this.signupForm.value).subscribe((res: any) => {
      if (res.UserID) {
        alert('User Details saved');
        this.router.navigateByUrl('/loginpage');
      } else {
        alert('User Details already exits');
      }
    });
  }
}
