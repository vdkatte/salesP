import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-solution-solution-critical-issue',
  templateUrl: './present-solution-solution-critical-issue.component.html',
  styleUrls: ['./present-solution-solution-critical-issue.component.css']
})
export class PresentSolutionSolutionCriticalIssueComponent implements OnInit 
{
  data1=[
    {
      Que1:"How you handle the customer when they find the product are faulty?",
      Option1:["Stay Calm","Listening","Acknowledge the Issue","Apologize and Thank Them","Document Their Responses","Follow Up","Come Out from Behind the Screen","Make It Speedy","Ask Questions"],
      marks1:[1,2,1,1,1,1,1,1,1],
      other:false
      },
      {
      Que1:"How will you handle customer if product supply is lessed?",
      Option1:["Be transparent","Explain","Set up notifications","Borrow from yourself","Use alternate product recommendations","Sell now, ship later","Assess your marketing","Ask your suppliers for help","Look at your supply chain"],
      marks1:[0,0,3,1,1,1,1,1,2],
      other:false
      },
      {
      Que1:"How do you handle product failure?",
      Option1:["Acknowledge 'Who' and 'Why'","Make Sure Your Goals Are Realistic","Get Out of Your Own Head","Communicate Problems Early and Proactively","Accept Responsibility"],
      marks1:[1,2,3,4,0],
      other:false
      },
      {
      Que1:"Sales Problems?",
      Option1:["Long Sales Cycles Is Reducing Effectiveness","There Is Not Enough Organic Web Traffic to Support Sales Efforts","Sales Follow-Up Is Ineffective or Non-Existent","B2B Buyers Don’t Find Brand Trusted or Reputable"],
      marks1:[1,2,3,4],
      other:false
      },
      {
      Que1:"How do you overcome challenges in selling a product?",
      Option1:["Prepare an impactful selling proposition.","Increase your rate of contact.","Scrutinize deals in the pipeline on a regular basis.","Follow-up on time.","Improve prospect engagement","Track your sales data."],
      marks1:[1,2,3,4,0,0],
      other:false
      },
      {
      Que1:"How do you overcome the challenges in your business?",
      Option1:["Experiment Before Investment.","Rethink Your Marketing Strategies.","Find Balance In Product Development.","Create A Stronger Team.","Make Virtual Events More Personal.","Communicate Your Short- And Long-Term Objectives.","Collaborate With Your Team."],
      marks1:[1,2,3,4,0,0,0],
      other:false
      },
      {
      Que1:"Which are the  main challenges that you face in trying to sell any product?",
      Option1:["Competing With Lower-Priced Rivals.","Surviving in Crowded Markets.","Getting Through to Decision Makers.","Managing Risk.","Taking the Pain Out of Proposal Writing."],
      marks1:[1,2,3,4,0],
      other:false
      },
      {
      Que1:"How do you answer overcoming challenges?",
      Option1:["Be honest! Don't make up an obstacle or lie about the details in the situation.","Don't exaggerate. Be specific about the situation and the outcome.","Emphasize key soft skills.n","Be concise.","Don't blame others.","Stay positive!"],
      marks1:[1,2,3,4,0,0],
      other:false
      },
      {
      Que1:"which are the issues in the product process?",
      Option1:["Market viability.","Product roadmap problems.","Workflow management.","Product engineering issues.","Pricing policy.","The pace of innovation.","Time-to-market."],
      marks1:[1,2,3,4,0,0,0],
      other:false
      },
      {
      Que1:"Which is the critical aspect in selling the product?",
      Option1:["communication","Understanding the buyer"," Awareness","Evaluation","Decision"],
      marks1:[1,2,3,4,0],
      other:false
      },
      {
      Que1:"Which are  critical skills?",
      Option1:["Communication","collaboration","critical thinking","creativity"],
      marks1:[1,2,3,4],
      other:false
      },
      {
      Que1:"What are the important aspects of products?",
      Option1:["aesthetic","symbolic","functionalities","quality","ease of use"],
      marks1:[1,2,3,4],
      other:false
      },
     {
      Que1:"which are critical skills for product manager?",
      Option1:["Critical Thinking And Analytical Skills.","Leadership And The Ability To Take Initiative.","Flexibility","Problem-Solving.","Time Management.","Communication Skills."],
      marks1:[1,2,3,4,0,0],
      other:false
      },
           {
      Que1:"Which  your biggest fear or challenge in sales?",
      Option1:[" fear of rejection."," Failure.","Change.","Public Speaking"],
      marks1:[1,2,3,4,0,0],
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
    criticalIssueValue: number=0;
    criticalSolutionDetails:any={};
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
      if(!this.criticalSolutionDetails.hasOwnProperty(que)){
        this.criticalSolutionDetails[que]=[]
      }
      for(let ele in this.criticalSolutionDetails){
        if(ele ===que){
          const index=[...this.criticalSolutionDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.criticalSolutionDetails[ele].splice(index,1)
          }else{
            this.criticalSolutionDetails[ele]=[...this.criticalSolutionDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.criticalIssueValue=this.sum
      console.log(this.criticalSolutionDetails);
      localStorage.setItem("Critical Issue", JSON.stringify(this.criticalIssueValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Critical Issue Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/present-solution-differntiate')
   }
   Previous(){
    this.router.navigateByUrl('/present-solution-solution-overview')
   }
}