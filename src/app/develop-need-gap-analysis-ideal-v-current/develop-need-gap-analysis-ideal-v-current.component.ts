import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-develop-need-gap-analysis-ideal-v-current',
  templateUrl: './develop-need-gap-analysis-ideal-v-current.component.html',
  styleUrls: ['./develop-need-gap-analysis-ideal-v-current.component.css']
})
export class DevelopNeedGapAnalysisIdealVCurrentComponent implements OnInit 
{
  data1=[
    {
    Que1:"Which tools are used to perform gas analysis?",
    Option1:["SWOT Analysis","McKinsey 7s Model","Fishbone Diagram","adler-Tushman's Congruence Model","PERT Technique"],
    marks1:[1,2,3,1,3],
    other:false
    },
    {
    Que1:"What is the current state of the company?",
    Option1:["Disvover","Design","Develop","Deploy","Testing"],
    marks1:[1,2,3,3,1],
    other:false
    },
    {
    Que1:"Which types of gap analysis are used?",
    Option1:["Product or market gap analysis","Needs gap analysis","Performance gap analysis"],
    marks1:[5,2,3],
    other:false
    },
    {
    Que1:"How do you handle gap analysis?",
    Option1:["Identify the current situation.","Set S.M.A.R.T goals of where you want to end up.","Analyze gaps from where you are to where you want to be.","Establish a plan to close existing gaps."],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"How do you identify learning gaps in the workplace?",
    Option1:["Conduct a Skills Gap Analysis.","Talk to Current Managers.","Collect Data.","Meet with Customer."],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"Which are the types of gap analysis?",
    Option1:["strategic","operational."],
    marks1:[5,5],
    other:false
    },
    {
    Que1:"Which are the marketing gaps?",
    Option1:["customer gap","knowledge gap","policy gap","delivery gap","communication gap."],
    marks1:[5,1,2,1,1],
    other:false
    },
    {
    Que1:"What are the different types of gaps in business?",
    Option1:["Common Gaps","Breakaway Gaps","Runaway Gaps","Exhaustion Gaps"],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"Which are the  stages of gap?",
    Option1:["Performance Gap","Product/Market Gap","Profit Gap"],
    marks1:[5,5,0],
    other:false
    },
    {
    Que1:"Which are the types of gap analysis in current vs ideal?",
    Option1:["Product or market gap analysis","skills gap analysis.","Needs gap analysis.","Performance gap analysis.","Healthcare gap analysis.","Financial gap analysis.","Retail gap analysis."],
    marks1:[5,5,0,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you conduct a personal gap analysis?",
    Option1:["Consult with senior leaders and managers.","Examine current staff functions and skills.","Decide how to close the gaps.","Implement the plan.","Measure and report the results.","Repeat."],
    marks1:[5,5,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you identify gaps in your personal skills?",
    Option1:["Define your professional goals.","Ask your colleagues.","Research in-demand skills.","Look to experts in your field.","Surround yourself with relevant information."],
    marks1:[5,5,0,0,0],
    other:false
    },
    {
    Que1:"How do you identify gaps in sales performance?",
    Option1:["Poor training .","Lack of confidence.","Lack of business acumen for that vertical.","Not understanding the support options available.","Not understanding the processes or feeling uncomfortable with the company's sales stack."],
    marks1:[5,5,0,0,0],
    other:false
    },
    {
    Que1:"Which are the gaps in customer service?",
    Option1:["the knowledge gap","the communication gap","the customer gap","the policy gap","the delivery one."],
    marks1:[5,5,0,0,0],
    other:false
    },
    {
    Que1:"Which are common skills gaps?",
    Option1:["critical thinking","communication","leadership","teamwork"],
    marks1:[5,5,0,0],
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
    idealVcurrentValue: number=0;
    idealvscurrentDetails:any={};
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
      if(!this.idealvscurrentDetails.hasOwnProperty(que)){
        this.idealvscurrentDetails[que]=[]
      }
      for(let ele in this.idealvscurrentDetails){
        if(ele ===que){
          const index=[...this.idealvscurrentDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.idealvscurrentDetails[ele].splice(index,1)
          }else{
            this.idealvscurrentDetails[ele]=[...this.idealvscurrentDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.idealVcurrentValue=this.sum
      console.log(this.idealvscurrentDetails);
      localStorage.setItem("Ideal v Current", JSON.stringify(this.idealVcurrentValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Ideal V Current Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/develop-need-gap-analysis-clarity')
   }
   Previous(){
    this.router.navigateByUrl('/develop-need-requirement')
   }
}