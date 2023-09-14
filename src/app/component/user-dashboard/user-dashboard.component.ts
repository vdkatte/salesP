import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  startExam() {
    var currentdate = new Date().getTime();
    alert(currentdate);
    // var datetime =
    //   currentdate.getDate() +
    //   '/' +
    //   (currentdate.getMonth() + 1) +
    //   '/' +
    //   currentdate.getFullYear() +
    //   ' ,' +
    //   currentdate.getHours() +
    //   ':' +
    //   currentdate.getMinutes() +
    //   ':' +
    //   currentdate.getSeconds();
    // localStorage.setItem('startTime', datetime);
  }
}
