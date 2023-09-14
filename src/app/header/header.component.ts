import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { InteractionService } from '../interaction.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  path: string="";

  constructor(private Interaction:InteractionService,router:Router) {
    router.events.forEach((event)=>{
      if(event instanceof NavigationStart){
       this.path=event.url.split("-")[0]
      }
    })
   }

  ngOnInit(): void {
  }

}
