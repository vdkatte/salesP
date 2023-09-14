import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-negotiation-alternatives',
  templateUrl: './close-negotiation-alternatives.component.html',
  styleUrls: ['./close-negotiation-alternatives.component.css']
})
export class CloseNegotiationAlternativesComponent implements OnInit 
{
  data1=[
    {
    Que1:"Why You sold this product to customer?",
    Option1:["Buisness Growth opportunities","External Market Factors","Personal Reason","Benefits of Using Brokerage Advisors"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"Why you can not sold to this product to customer?",
    Option1:["It is not the optimal time to sell","Financial information is lacking","There are organization and contractual barriers to selling","The business is not scalable","The company is too dependent on the owner","There is no recurring revenue","The company has a very high customer concentration"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"If you required this product in future then can you will buy this from us?",
    Option1:["Yes","No","Not Sure"],
    marks1:[5,2,3],
    other:false
    },
    {
    Que1:"Why You can buy this product from us in future?",
    Option1:["No Trust","Lack of Urgency","Not enough information","Unclear value","close deal faster","Bad customer feedback","We will Buy from You"],
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
    alternativesValue: number=0;
    alternativeDetails:any={};
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
      if(!this.alternativeDetails.hasOwnProperty(que)){
        this.alternativeDetails[que]=[]
      }
      for(let ele in this.alternativeDetails){
        if(ele ===que){
          const index=[...this.alternativeDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.alternativeDetails[ele].splice(index,1)
          }else{
            this.alternativeDetails[ele]=[...this.alternativeDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.alternativesValue=this.sum
      console.log(this.alternativeDetails);
      localStorage.setItem("Alternatives", JSON.stringify(this.alternativesValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Alternatives Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/close-commit')
   }
   Previous(){
    this.router.navigateByUrl('/close-negotiation-agreement')
   }
}