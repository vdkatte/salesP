import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
myForm: any;
navigateToDashboard(){
  if(this.myForm.valid){
  }

}
onSubmit(){
  if(this.myForm.invalid){
  
    return ;
    this.navigateToDashboard();
  }
  this.navigateToDashboard();
}
}
