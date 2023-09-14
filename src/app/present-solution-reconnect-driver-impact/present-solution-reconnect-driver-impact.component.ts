import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-solution-reconnect-driver-impact',
  templateUrl: './present-solution-reconnect-driver-impact.component.html',
  styleUrls: ['./present-solution-reconnect-driver-impact.component.css']
})
export class PresentSolutionReconnectDriverImpactComponent implements OnInit 
{
  data1=[
    {
    Que1:"How do you create impact for our product in the market?",
    Option1:["Use buyer personas","Create Websites, and creates social media accounts","Don’t use transparent sales 'techniques'","Use proper collateral and support during sales meetings","Compete by demonstrating the positive impact on the customer","Establish a lead qualification process","Make sure your data is clean and high-quality","Provide relevant content for your customer (in a smart manner)"],
    marks1:[1,2,1,1,1,1,1,2],
    other:false
    },
    {
    Que1:"How do you create a positive impact of our product in market?",
    Option1:["Making a lasting impression in the staffing industry","Customize Your Approach","Hire  best person to sell you product","What you do matters","A note to managers"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How will you sold our product impactfully in market?",
    Option1:["Drive Traffic to Your Website","Leave Perfect First Impressions & Encourage to Discover More Content","Build a Trust Relationship Between Your Brand and Customers","Convey the Benefits of Your Products More Than Features","Make Your Offer to Convince Customers to Buy","Use Urgency to Push Customers to Buy Your Products","Keep the Customers Engaged with Email Marketing"],
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
    impactValue: number=0;
    impactDetails:any={};
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
      if(!this.impactDetails.hasOwnProperty(que)){
        this.impactDetails[que]=[]
      }
      for(let ele in this.impactDetails){
        if(ele ===que){
          const index=[...this.impactDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.impactDetails[ele].splice(index,1)
          }else{
            this.impactDetails[ele]=[...this.impactDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.impactValue=this.sum
      console.log(this.impactDetails);
      localStorage.setItem("Impact", JSON.stringify(this.impactValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Impact Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/present-solution-reconnect-driver-example')
   }
   Previous(){
    this.router.navigateByUrl('/present-solution-differntiate')
   }
}
