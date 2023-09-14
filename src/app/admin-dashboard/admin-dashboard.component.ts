import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements OnInit {
  userDetails: any[] = [];
  endTime: any;
  startTime: any;
  timeTaken: any;
  constructor(private adminService: AdminServiceService) {}

  ngOnInit(): void {
    this.adminService.getuserDetails().subscribe((res: any) => {
      console.log(res);
      this.userDetails = res;
      let endTime = new Date(res[0].endTime);
      let startTime = new Date(res[0].startTime);
      this.timeTaken = endTime.getTime() - startTime.getTime();
      console.log(this.timeTaken);
      var msec = this.timeTaken;
      var hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      msec -= ss * 1000;
      console.log(hh + ':' + mm + ':' + ss);
      this.timeTaken = hh + ':' + mm + ':' + ss;
    });
  }
}
