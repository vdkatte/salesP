import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-solution-solution-overview',
  templateUrl: './present-solution-solution-overview.component.html',
  styleUrls: ['./present-solution-solution-overview.component.css']
})
export class PresentSolutionSolutionOverviewComponent implements OnInit 
{
  data1=[ 
    {
    Que1:"How would you compare our products to our competitors?",
    Option1:["Differentiate your product by size","Differentiate your product by your packaging","Differentiate your product by offering a bonus","Differentiate your product by highlighting a feature","Differentiate your product by exposing the weaknesses of other brands","Differentiate your product by adding a simple feature or ingredient","Differentiate your product by origin","Differentiate your product by branding"],
    marks1:[1,2,1,1,1,1,1,2],
    other:false
    },
    {
    Que1:"How you will give our product overview to customer?",
    Option1:["Offer loyal customers an exclusive preview","Use Special introductory offer","Make use of Google my buisness","Run a Social media contest","Host an event","Offer a complimentary upgrade","Allow trade-ins","Share customer reviews","Spread the word via email"],
    marks1:[1,2,1,1,1,1,1,1,1],
    other:false
    },
    {
    Que1:"How do you present a product overview?",
    Option1:["Introduction.","Company Overview.","The Problem.","Product and Solution.","Promise of Value or Benefits.","Product Positioning.","Use Cases and Social Proof.","Call-to-Action"],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you present an overview in a presentation?",
    Option1:["Tell your audience who you are.","Share what you're presenting.","Let them know why it's relevant.","Tell a story.","Ask for audience participation.","The attention-grabber."],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you present a product speech?",
    Option1:["Introduction – Frame the customer 'need' that the product, service, or idea addresses.","Act 1 – Describe the need in more detail.","Act 2 – Describe how your solution addresses the need.","Act 3 – Prove the benefits of buying in to your solution."],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How long should an overview presentation be?",
    Option1:["10-15 minutes","30 -60mint","1hr to 5hr ","1 Day to 5 Day"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you present a product effectively?",
    Option1:["Offer customers an exclusive preview.","Create gift guides or bundle collections.","Use customer-generated content on social media.","Leverage email signup discounts.","Create a subscription service.","Utilize all content marketing platforms.","Use targeted ads."],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you present a sales solution?",
    Option1:["Prepare","Beginning the Solution Presentation With a Review.","Invite the Prospect To Speak.","Make Sure Your Prospect Is Satisfied.","Closing."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"What is the overview of selling process?",
    Option1:["prospecting","preparation","approach","presentation","handling objections","closing and follow-up."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you write an overview of a solution?",
    Option1:["Define the issues that your audience face in their terms.","the Solution","How it Works","The Advantages","The Results"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you deliver a solution?",
    Option1:["Time Management","Effective Communication.","Consistency of Values.","Right First Time.","Take a quality and collaborative approach."],
    marks1:[1,2,3,4,0],
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
    overviewValue: number=0;
    overviewDetails:any={};
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
      if(!this.overviewDetails.hasOwnProperty(que)){
        this.overviewDetails[que]=[]
      }
      for(let ele in this.overviewDetails){
        if(ele ===que){
          const index=[...this.overviewDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.overviewDetails[ele].splice(index,1)
          }else{
            this.overviewDetails[ele]=[...this.overviewDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.overviewValue=this.sum
      console.log(this.overviewDetails);
      localStorage.setItem("Overview", JSON.stringify(this.overviewValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Overview Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/present-solution-solution-critical-issue')
   }
}