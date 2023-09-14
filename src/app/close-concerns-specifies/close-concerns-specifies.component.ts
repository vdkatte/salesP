import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-concerns-specifies',
  templateUrl: './close-concerns-specifies.component.html',
  styleUrls: ['./close-concerns-specifies.component.css']
})
export class CloseConcernsSpecifiesComponent implements OnInit 
{
  data1=[
    {
    Que1:"what are the specific closing strategies in marketing?",
    Option1:["Making an assumption","Offering an alternative option","Asking a sharp-angle question","Making it feel like 'now or never'","Summarizing the points","Creating a sense of urgency","Giving a professional suggestion"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"Which modern specifies Techniques are used to close?",
    Option1:["Question Closes","Assumptive Closes","Take Away Closes","Sharp Angle Closes","Soft Closes","Now or Never Closes","Summary Closes"],
    marks1:[1,2,3,4,0,0,0],
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
    closeSpecifiesValue: number=0;
    specifiesDetails:any={};
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
      if(!this.specifiesDetails.hasOwnProperty(que)){
        this.specifiesDetails[que]=[]
      }
      for(let ele in this.specifiesDetails){
        if(ele ===que){
          const index=[...this.specifiesDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.specifiesDetails[ele].splice(index,1)
          }else{
            this.specifiesDetails[ele]=[...this.specifiesDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.closeSpecifiesValue=this.sum
      console.log(this.specifiesDetails);
      localStorage.setItem("Close Specifies", JSON.stringify(this.closeSpecifiesValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Close Specifies Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/close-negotiation')
   }
   Previous(){
    this.router.navigateByUrl('/close-concerns-anticipate')
   }
}