import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-develop-need-requirement-importance',
  templateUrl: './develop-need-requirement-importance.component.html',
  styleUrls: ['./develop-need-requirement-importance.component.css']
})
export class DevelopNeedRequirementImportanceComponent implements OnInit 
{
  data1=[
    {
    Que1:"As per you which skills are more important in selling market?",
    Option1:["Confidence","Resilience","Active listening","Entrepreneurial spirit","Rapport building"],
    marks1:[2,2,3,2,1],
    other:false
    },
    {
    Que1:"As per you which types of selling is most important?",
    Option1:["Transactional selling","Solution selling","Consultative selling","Provocative selling"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"Why is marketing framework important?",
    Option1:["A marketing framework is meant to help your marketing team function at its highest level.","There are several benefits to creating a marketing framework.","improving the overall marketing strategy."],
    marks1:[1,2,7],
    other:false
    },
    {
    Que1:"What is the importance of framework in structure?",
    Option1:["A framework is the basic structure of something.","It's a set of ideas or facts that provide support for something.","In the case of business problems","framework creates the basic structure that gives focus and support to the problem you're trying to solve."],
    marks1:[1,2,7,0],
    other:false
    },
    {
    Que1:" Which are  the important skill in sales and marketing?",
    Option1:["customer service","selling","negotiating and influencing","analysis and decision-making","management skills.","of knowledge business environment .","product knowledge"," financial awareness."],
    marks1:[1,2,7,0,0,0,0,0],
    other:false
    },
    {
    Que1:" Which sales skills do you feel are important in selling today?",
    Option1:["Communication.","Prospecting.","Discovery.","Business Acumen.","Social Selling.","Storytelling.","Active Listening.","Objection Handling."],
    marks1:[1,2,7,0,0,0,0,0],
    other:false
    },
    {
    Que1:"Which are the skills of a seller?",
    Option1:["Communication Skills.","Active Listening Skills. ","Persuasive Skills.","Collaboration Skills.","Self-Motivating Skills.","Problem Solving Skills."],
    marks1:[1,2,7,0,0,0],
    other:false
    },
    {
    Que1:"Which are the most important factors in selling?",
    Option1:["pricing","condition","marketing"],
    marks1:[1,2,7],
    other:false
    },
    {
    Que1:"Which  are the most important things in marketing sales?",
    Option1:["product","price","promotion","place."],
    marks1:[1,2,7,0],
    other:false
    },
    {
    Que1:"Which skills are in demand for marketing?",
    Option1:["Social media skills.","Management skills.","Digital marketing skills.","Communication skills.","Leadership skills.","Project management skills.","Advertising skills."],
    marks1:[1,2,7,0,0,0,0],
    other:false
    },
    {
    Que1:"Which  are the rules important in  selling?",
    Option1:["Build a relationship.","Listen first.","Talk money.","Don't push.","Set reasonable expectations.","Respect time.","Deliver on promises.","Follow up."],
    marks1:[1,2,7,0,0,0,0,0],
    other:false
    },
    {
    Que1:"Which are the Most Important types of selling?",
    Option1:["Transactional selling.","Solution selling.","Consultative selling.","Provocative selling.","Collaborative selling.","Social Selling.","Partnership Selling.","High-Pressure Selling."],
    marks1:[1,2,7,0,0,0,0,0],
    other:false
    },
    {
    Que1:"Which are the important methods of selling?",
    Option1:["Active Listening.","Warm Calls.","Features & Benefits.","Needs & Solutions.","Social Selling."],
    marks1:[1,2,7,0,0],
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
    importanceValue: number=0;
    importanceDetails:any={};
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
      if(!this.importanceDetails.hasOwnProperty(que)){
        this.importanceDetails[que]=[]
      }
      for(let ele in this.importanceDetails){
        if(ele ===que){
          const index=[...this.importanceDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.importanceDetails[ele].splice(index,1)
          }else{
            this.importanceDetails[ele]=[...this.importanceDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.importanceValue=this.sum
      console.log(this.importanceDetails);
      localStorage.setItem("Importance", JSON.stringify(this.importanceValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Importance Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/develop-need-gap-analysis')
   }
   Previous(){
    this.router.navigateByUrl('/develop-need-requirement-specifies')
   }
}