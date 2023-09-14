import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-purpose',
  templateUrl: './open-purpose.component.html',
  styleUrls: ['./open-purpose.component.css']
})
export class OpenPurposeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('val')
  }


}
