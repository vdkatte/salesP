import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-develop-need-requirement-specifies',
  templateUrl: './develop-need-requirement-specifies.component.html',
  styleUrls: ['./develop-need-requirement-specifies.component.css']
})
export class DevelopNeedRequirementSpecifiesComponent implements OnInit 
{
  data1=[
    {
    Que1:"Which Product Specification are you Included ?",
    Option1:["Product Summary","Buisness cases","User stories","User personal","Product specifications","Product design"],
    marks1:[2,2,3,1,1,1],
    other:false
    },
    {
    Que1:"Which Product specification are you used?",
    Option1:["Descriptive","Performance","Reference standards","Proprietary"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"What should be included in product specification?",
    Option1:["dimensions","safety standards","expiry details","overall product design specification"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"What is specification of product in marketing?",
    Option1:["What is specification of product in marketing? A product specification is a document that outlines the requirements of a particular product or feature.","Think of it as a blueprint for what a product team is building.","Product specifications can contain a lot of information and present it in a clear, concise format."],
    marks1:[1,2,7],
    other:false
    },
    {
    Que1:"Which are the types of quality specification?",
    Option1:["item","supplier","customer"],
    marks1:[1,2,7],
    other:false
    },
    {
    Que1:"What are the different types of specifications in purchasing?",
    Option1:["Functional","Performance","Technical"],
    marks1:[1,2,7],
    other:false
    },
    {
    Que1:"Who decides the product specifications?",
    Option1:["Product specification is the stage of the business buying process in which the buying organization decides on and specifies the best technical product characteristics for a needed item","The buying organization develops the item's technical product specifications often with the help of a value analysis engineering team."],
    marks1:[3,7],
    other:false
    },
    {
    Que1:"What are the five product characteristics?",
    Option1:["Efficient.","Illustrative.","Balanced.","Natural."],
    marks1:[3,7,0,0],
    other:false
    },
  ]
    isChecked:boolean=false;
    val: any;
    clicked:boolean=false;
    values: any[]=[];
    public sum:number=0;
    clickedCheckbox: any;
    check: any;
    specifiesValue: number=0;
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
      this.specifiesValue=this.sum
      console.log(this.specifiesDetails);
      localStorage.setItem("Specifies", JSON.stringify(this.specifiesValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Specifies Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/develop-need-requirement-importance')
   }
   Previous(){
    this.router.navigateByUrl('/develop-need-requirement-framework')
   }
}