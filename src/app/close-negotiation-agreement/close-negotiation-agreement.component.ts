import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-close-negotiation-agreement',
  templateUrl: './close-negotiation-agreement.component.html',
  styleUrls: ['./close-negotiation-agreement.component.css']
})
export class CloseNegotiationAgreementComponent implements OnInit 
{
  data1=[
    {
    Que1:"How many year you are signing agreement with us?",
    Option1:["5+ Years","4 Years","3 years","2 Years","1 Years"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"Can you sign a agreement on other product?",
    Option1:["Yes","No","Not sure"],
    marks1:[1,4,5],
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
    agreementValue: number=0;
    agreementDetails:any={};
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
      if(!this.agreementDetails.hasOwnProperty(que)){
        this.agreementDetails[que]=[]
      }
      for(let ele in this.agreementDetails){
        if(ele ===que){
          const index=[...this.agreementDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.agreementDetails[ele].splice(index,1)
          }else{
            this.agreementDetails[ele]=[...this.agreementDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.agreementValue=this.sum
      console.log(this.agreementDetails);
      localStorage.setItem("Agreement", JSON.stringify(this.agreementValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Agreement Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/close-negotiation-alternatives')
   }
   Previous(){
    this.router.navigateByUrl('/close-concerns')
   }
}