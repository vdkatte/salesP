import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-concerns-anticipate',
  templateUrl: './close-concerns-anticipate.component.html',
  styleUrls: ['./close-concerns-anticipate.component.css']
})
export class CloseConcernsAnticipateComponent implements OnInit 
{
  data1=[
    {
    Que1:"How to acknowledge customer issue?",
    Option1:["Resolving Customer Complaints","Remember that it's not personal","Listen to what the customer says","Acknowledge what the customer says and feels","Understand what the customer wants","Offer a solution","Apologize to the customer"],
    marks1:[1,2,3,1,1,1,1],
    other:false
    },
    {
    Que1:"How can you successfully anticipate you customer needs?",
    Option1:["Know your customers","Be Proactive","Ask for feedback","Keep up with the trends","Anticipation focusing on tomorrow","Listening vs anticipation","Make customer success your priority","Push Innovation"],
    marks1:[1,2,3,4,0,0,0,0],
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
    anticipateValue: number=0;
    anticipateDetails:any={};
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
      if(!this.anticipateDetails.hasOwnProperty(que)){
        this.anticipateDetails[que]=[]
      }
      for(let ele in this.anticipateDetails){
        if(ele ===que){
          const index=[...this.anticipateDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.anticipateDetails[ele].splice(index,1)
          }else{
            this.anticipateDetails[ele]=[...this.anticipateDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.anticipateValue=this.sum
      console.log(this.anticipateDetails);
      localStorage.setItem("Anticipate", JSON.stringify(this.anticipateValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Anticipate Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/close-concerns-specifies')
   }
}