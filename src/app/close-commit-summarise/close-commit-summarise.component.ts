import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-commit-summarise',
  templateUrl: './close-commit-summarise.component.html',
  styleUrls: ['./close-commit-summarise.component.css']
})
export class CloseCommitSummariseComponent implements OnInit 
{
  data1=[
    {
    Que1:"In which format you gives us final report of our product?",
    Option1:["Physically","Digitaly","Not provide final report","Not Decided Yet"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you summarize a sales report?",
    Option1:["The activities of the company and the overview of the sales operations","The determining relevant key performance indicators (KPI)","Visual graphics and charts to make the data easy to understand","The sales volume","The sales summary"],
    marks1:[1,2,3,4,0],
    other:false
    }
  ]
    isChecked:boolean=false;
    val: any;
    clicked:boolean=false;
    values: any[]=[];
    public sum:number=0;
    clickedCheckbox: any;
    check: any;
    summariseValue: number=0;
    summariseDetails:any={};
     constructor(private router:Router) { }
   
     ngOnInit(): void {
     }
    onchange(event:any,i:any)
    {
      if(event.target.checked)
      {
        this.data1[i].other=true
        this.sum+=parseInt(event.target.value);
      }
      else
      {
        this.data1[i].other=false
        this.sum-=event.target.value
      }
    }
   
    onclick(event:any,que:any,data:any)
    {
      if(event.target.checked)
      {
        this.sum+=parseInt(event.target.value);
      }
      else
      {
        this.sum-=event.target.value
      }
      if(!this.summariseDetails.hasOwnProperty(que)){
        this.summariseDetails[que]=[]
      }
      for(let ele in this.summariseDetails){
        if(ele ===que){
          const index=[...this.summariseDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.summariseDetails[ele].splice(index,1)
          }else{
            this.summariseDetails[ele]=[...this.summariseDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.summariseValue=this.sum
      console.log(this.summariseDetails);
      localStorage.setItem("Summarise", JSON.stringify(this.summariseValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Summarise Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/close-commit-next-step')
   }
   Previous(){
    this.router.navigateByUrl('/close-negotiation')
   }
}
