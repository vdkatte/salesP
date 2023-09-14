import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-solution-differntiate-comman-standards',
  templateUrl: './present-solution-differntiate-comman-standards.component.html',
  styleUrls: ['./present-solution-differntiate-comman-standards.component.css']
})
export class PresentSolutionDifferntiateCommanStandardsComponent implements OnInit 
{
  data1=[
    {
    Que1:"What general strategies will you use to differentiate our products from others?",
    Option1:["Product Design","Marketing","Packaging","Pricing"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How would you differntiate our products with our competitors?",
    Option1:["Offer unbeatable customer services","Lean into your niche","Add personal touch","Used price as a distinguishing factor","Give Your customer options to customize your products"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"Which of differentiate strategies will used to sell our products?",
    Option1:["Emotional Response","Innovation","Brand Presentation","Unique Experience","Pricing"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you differentiate ourselves from our competitors?",
    Option1:["Know more about your client than anyone else.","Be Fresh.","Be seen as possessing renown and recognition.","Have a Unique Relationship Process.","Develop a Personal Style.","Bring Their Ideas to Life.","Show You Really Care","Be seen as well-connected."],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you sell a product in a unique way?",
    Option1:["Make a list of all the potential differentiators of your brand and what you sell.","Research the competition.","Compare your most unique angles against your audience's needs.","Compile the data.","Think about viable ways to apply it across your business."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How can you sell better than competitors?",
    Option1:["Get there first and try to lock up the sale before a competitor gets the business.","Give a better presentation. Practice your presentations and give your best.","Demonstrate. Get the customer involved in the presentation.","Build more value."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do You make our product stand out from competitors?",
    Option1:["Map our competitors.","-Know your target audience well.","Bet on innovation.","Add value to the brand.","Offer an unique experience."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you sell to competitors?",
    Option1:["Get an Idea of Your Business's Value.","Don't Let Emotions Get in the Way.","Always Proceed With Caution.","Try to Get the Most Out of the Deal.","Due Diligence Takes Precedence.","Know Who You're Working With","Make Sure You're Ready to Sell."],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you avoid losing customers to your competitors?",
    Option1:["Prioritize Customer Service.","Personalize Your Contact with Customers.","Use Email Marketing to Keep In Touch.","Begin A Loyalty or Referral Program.","Survey Your Most Loyal Customers.","Respond Quickly to All Messages."],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you differentiate your services from competitors?",
    Option1:[" Have A Genuine USP.","Do Business Differently.","Solve Your Customer's Problems.","Don't Be Too General.","Establish An Individual Company Culture.","Be Better At Marketing."],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you overcome challenges from competitors?",
    Option1:["Find and then solve your customers' pain points","Find a niche in the market via storytelling and specialization.","Set competitive pricing.","Change your business to stay ahead of your competition.","Provide great customer service."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you handle most common objections in sales?",
    Option1:["Practice active listening.","Repeat back what you hear.","Validate your prospect's concerns.","Ask follow-up questions.","Leverage social proof.","Set a specific date and time to follow up.Anticipate sales objections."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you handle objection handling in sales?",
    Option1:["Budget","Authority","Need","Timeliness"],
    marks1:[1,2,3,4],
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
    commanStandardsValue: number=0;
    commanStandardsDetails:any={};
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
      if(!this.commanStandardsDetails.hasOwnProperty(que)){
        this.commanStandardsDetails[que]=[]
      }
      for(let ele in this.commanStandardsDetails){
        if(ele ===que){
          const index=[...this.commanStandardsDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.commanStandardsDetails[ele].splice(index,1)
          }else{
            this.commanStandardsDetails[ele]=[...this.commanStandardsDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.commanStandardsValue=this.sum
      console.log(this.commanStandardsDetails);
      localStorage.setItem("Comman Standards", JSON.stringify(this.commanStandardsValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Comman Standards Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/present-solution-differntiate-why-you')
   }
   Previous(){
    this.router.navigateByUrl('/present-solution-solution')
   }
}