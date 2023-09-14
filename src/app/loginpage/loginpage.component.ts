import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  selectedRole: any;
  role: any;
  loginForm: any;
  useraa: any;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private user: UserService
  ) {
    this.loginForm = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      role: [''],
    });
  }

  ngOnInit(): void {}
  onchange(event: any) {
    this.selectedRole = event.target.value;
  }
  submit() {
    this.user.login(this.loginForm.value).subscribe((res: any) => {
      alert(res);

      localStorage.setItem('userId', res.UserID);
      localStorage.setItem('username', res.userName);
      if (res.UserID) {
        if (res.role == 'admin') {
          this.router.navigateByUrl('/admin-dashboard');
        } else {
          this.router.navigateByUrl('/user-dashboard');
        }
      }
    });
  }
  onsubmit() {
    this.router.navigateByUrl('/sign-up');
  }
}
