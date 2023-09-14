import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-solution-differntiate-evidence',
  templateUrl: './present-solution-differntiate-evidence.component.html',
  styleUrls: ['./present-solution-differntiate-evidence.component.css']
})
export class PresentSolutionDifferntiateEvidenceComponent implements OnInit 
{
  data1=[
    {
    Que1:"Can You Provide your last one year selling record?",
    Option1:["Yes","No","May be"],
    marks1:[4,3,3],
    other:false
    },
   {
    Que1:"How do you provide product information to customers?",
    Option1:["How to Connect Your Product Information to Customer Experience","Make It Appealing.","Keep It Simple and Consistent.","Post User Reviews.","Keep It Accurate.","Cue Up Better Customer Experiences."],
    marks1:[4,3,3,0,0,0],
    other:false
    },
    {
    Que1:"How do you build evidence that the market needs the product?",
    Option1:[" Look into other companies and competitors","learn about their positioning","offering","pricing","target audiences"],
    marks1:[4,3,3,0,0],
    other:false
    },
    {
    Que1:"Why do we need evidence in marketing?",
    Option1:["Evidence-based marketing ensures that your business maintains the competitive advantage","staying one step ahead of the competition and remaining relevant","Keep your business up to date","competitive by remaining abreast of these trends and practices!"],
    marks1:[4,3,3,0],
    other:false
    },
     {
    Que1:"Which are the different types of evidence in marketing?",
    Option1:["Packaging.","Internet/web pages.","Paperwork","Brochures.","Furnishings.","Signage"],
    marks1:[4,3,3,0,0,0],
    other:false
    },
    {
    Que1:"How do you use evidence-based management?",
    Option1:["Asking","Acquiring","Appraising","Aggregating"],
    marks1:[4,3,3,0],
    other:false
    },
    {
    Que1:"How do you introduce evidence?",
    Option1:["Transitions that Lead Into Evidence and Explanation.","Lead Into Evidence. Leading into Explanation."],
    marks1:[5,5],
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
    evienceValue: number=0;
    evidenceDetails:any={};
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
      if(!this.evidenceDetails.hasOwnProperty(que)){
        this.evidenceDetails[que]=[]
      }
      for(let ele in this.evidenceDetails){
        if(ele ===que){
          const index=[...this.evidenceDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.evidenceDetails[ele].splice(index,1)
          }else{
            this.evidenceDetails[ele]=[...this.evidenceDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.evienceValue=this.sum
      console.log(this.evidenceDetails);
      localStorage.setItem("Evidence", JSON.stringify(this.evienceValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Evidence Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/present-solution-reconnect-driver')
   }
   Previous(){
    this.router.navigateByUrl('/present-solution-differntiate-why-you')
   }
}