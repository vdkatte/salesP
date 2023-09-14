import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-reason-to-move-justify',
  templateUrl: './reason-to-move-justify.component.html',
  styleUrls: ['./reason-to-move-justify.component.css']
})
export class ReasonToMoveJustifyComponent implements OnInit 
{
  data1=[
    {
    Que1:"What should I say to sell my product?",
    Option1:["Focus on your ideal buyer","Entice with benefits","Justify using superlatives","Appeal to your readers' imagination","Cut through the rational barriers with mini-stories"],
    marks1:[1,2,3,0,5],
    other:false
    },
    {
    Que1:"How You attracts Customer?",
    Option1:["Free","Exclusive","Easy","Limited","Guaranteed","Get"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you introduce the product you are selling?",
    Option1:["Define a selling point","Gather support","Show enthusiasm","Train your team","Schedule a launch date","Control your product's life cycle"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you sell a product speech?",
    Option1:["Make it short","Make it clear","Explain who your customers are","Explain the problem they're facing","Explain how your product addresses their needs"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you make people want your product?",
    Option1:["Drive Traffic to Your Website","Leave Perfect First Impressions & Encourage to Discover More Content","Build a Trust Relationship Between Your Brand and Customers","Convey the Benefits of Your Products More Than Features","Keep the Customers Engaged with Email Marketing"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you justify a product?",
    Option1:["Customer need","Competitive positioning","The fit of the new product into the existing product range","Potential profitability","Speed to market","Cost/benefit (including risk implications)"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How you justify your product price to customers?",
    Option1:["Introduce a new version","Cut to the chase","Remind customers about the value they get","Tell them about your cost","Be humble on social media","Launch a low-cost version","Highlight social responsibility","Make sure your price can be justified"],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you justify a price increase to a customer?",
    Option1:["Tell them why you're doing it","Highlight the value and quality","Be empathic","Deliver the message clearly","Call it a‘price'increase"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you sell your product to customers?",
    Option1:["Completely understand the product","Know your market and who will buy your product","Position the product as a solution to a problem or make something easier","Make your customer comfortable with you as a seller","Show first, then sell","Don't talk down to your audience"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you handle product failure?",
    Option1:["Acknowledge 'Who' and 'Why'","Make Sure Your Goals Are Realistic","Get Out of Your Own Head","Accept Responsibility","Communicate Problems Early and Proactively"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you resolve a problem or fault with product or service?",
    Option1:["Formulate Solutions","Deliver the Solution","Follow up with Customers"],
    marks1:[1,2,7],
    other:false
    },
    {
    Que1:"How do you know if my product will be successful?",
    Option1:["Do a test","Talk to potential customers","Ask people to buy now","Do some research","Remain positive","Become the customer","Identify your market"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"What would be a reason you wouldn t buy a product or service?",
    Option1:["There are many reasons why customers don't buy a product or service.","In some cases, it's because they can't find what they're looking for.","In others, the price is too high.","And sometimes, the customer just doesn't trust the business enough to make a purchase"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you sell to a customer that doesn't want to buy?",
    Option1:["Be there even when you think a sale is off the table.","Donate your time.","Offer your expertise.","Give your money."],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How customer  deciding whether or not to buy a certain product?",
    Option1:["Want money or item?","Can you wait?","Will you use it in the long term? ","Have you invested first? ","Are you buying the item for social media?","Is it an emotional buy?"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you justify your product?",
    Option1:["Introduce a new version.","Cut to the chase.","Remind customers about the value they get.","Tell them about your costs.","Be humble on social media.","Launch a low-cost version.","Highlight social responsibility."],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you justify an argument?",
    Option1:["Provide Support.","Establish Reasons.","Discuss Budgetary Issues."],
    marks1:[1,4,5],
    other:false
     },
    {
    Que1:"Which are key elements of justification?",
    Option1:["importance","necessity","convenience","benefits"],
    marks1:[1,4,5,0],
    other:false
    },
    {
    Que1:"How do you justify a price to a customer?",
    Option1:["Review your pricing strategy.","Point out your added value.","Find your customer's 'pain points'","Differentiate yourself from online competitors.","Stand your ground."],
    marks1:[1,4,5,0,0],
    other:false
    },
    {
    Que1:"How do you answer a customer about a high price?",
    Option1:["Find out why the prospect thinks it's too expensive.","Ask what it would cost the prospect to do nothing.","Temporarily set the price aside.","Ask what a fair price would be.","Compare price to ROI."],
    marks1:[1,4,5,0,0],
    other:false
    },
    {
    Que1:"How to respond to a customer's price negotiation request",
    Option1:["Share the lowest terms you can offer and add variables.","Examine why they want to negotiate and actively listen.","Focus on the simplest issue first.","Trade discounts for concessions.","Convince them of the value of your product.","Negotiate as long as possible."],
    marks1:[1,4,5,0,0,0],
    other:false
    },
    {
    Que1:"How do you encourage customers to buy more?",
    Option1:["Make your first contact count.","Give your customers your undivided attention.","Don't ask customers to buy without seeing the menu.","Find out what your customers need, rather than telling them what you want them to buy.","Don't ever stop selling."],
    marks1:[1,4,5,0,0],
    other:false
    },
    {
    Que1:"How do you impress customers ?",
    Option1:["Respond to Inquiries Quickly.","Prove that You Care About Them","Perks for Loyal Customers.","Understand What They Need.","Provide Genuine Help.","Follow Up.","Do Great Work."],
    marks1:[1,4,5,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you convince customers to accept price increase?",
    Option1:["show certainty in your decision and keep pushing on.","explain how the price increase will be valuable for the customers.","keep it brief.","open a genuine, personal, one-on-one conversation and give users a way to contact you.","consider offering a special deal for a pre-increase revenue boost."],
    marks1:[1,4,5,0,0],
    other:false
    },
    {
    Que1:"How do you change customer behavior?",
    Option1:["Reinforce positive new beliefs.","Shape emerging habits with new offerings.","Sustain new habits, using contextual cues.","Align messages to consumer mindsets.","Analyze consumer beliefs and behaviors at a granular level."],
    marks1:[1,4,5,0,0],
    other:false
    },
    {
    Que1:"How do you become a strong sales person?",
    Option1:["Confidence.","Ability and willingness to listen.","The ability to maintain focus.","Strong communication skills.","Creativity.","A hunger to learn.","Persistence."],
    marks1:[1,4,5,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you move prospects through the sales cycle?",
    Option1:["Determine what stage they're at.","Help them understand their problem.","Ensure that your solution addresses the prospect's problem.","Keep asking questions.","Create a personalized experience for each prospect.","Communicate regularly with prospect at every stage."],
    marks1:[1,4,5,0,0,0],
    other:false
    },
    {
  Que1:"Which are the reasons for decline stage in product life cycle?",
  Option1:["technological advances","trends","innovation or changing consumer tastes."],
  marks1:[1,4,5],
  other:false
    },
    {
  Que1:"Which are the reasons for customer to turn to our competitors?",
  Option1:["Poor online presence.","Poor products quality.","Poor customer service. ","Poor restaurant reputation.","Poor pricing.","Poor Operations."],
  marks1:[1,4,5,0,0,0],
  other:false
  },
{
Que1:"Why should a customer buy from you instead of your competitor?",
Option1:["Perhaps you offer higher quality","a lower price","a superior set of features","completely unique offering."],
marks1:[1,4,5,0],
other:false
},
{
Que1:"Which is the main reason for competition in business?",
Option1:["lower prices","higher quality goods and services","greater variety","more innovation."],
marks1:[1,4,5,0],
other:false
},
{
Que1:"How do you win competitors?",
Option1:["Know Your Customers.","Understand the Competition.","Highlight Your Difference.","Clarify Your Message.","Explore Strategic Partnership Opportunities.","Keep Innovating."],
marks1:[1,4,5,0,0,0],
other:false
},
  

  ]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  reasonToMoveJustifyValue: number=0;
  check: any;
  submited: any;
  aa:any;
  intro:number=0;
  ewc: any;
  a: any;
  total: any;
  percantage: any;
  justifyDetails:any={};
   constructor(private router:Router,private _interactionService:InteractionService) { }
   
     ngOnInit(): void {
     }
    onchange(event:any,i:any)
    {
      if(event.target.checked)
      {
        this.data1[i].other=true;
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
      if(!this.justifyDetails.hasOwnProperty(que)){
        this.justifyDetails[que]=[]
      }
      for(let ele in this.justifyDetails){
        if(ele ===que){
          const index=[...this.justifyDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.justifyDetails[ele].splice(index,1)
          }else{
            this.justifyDetails[ele]=[...this.justifyDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.reasonToMoveJustifyValue=this.sum
      console.log(this.justifyDetails);
      localStorage.setItem("Reason To Move Justify", JSON.stringify(this.reasonToMoveJustifyValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Reason To Move Justify Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/dashboard')
    this._interactionService.roleAccess(this.aa)
   let Reason =localStorage.getItem('Reason To Move Justify')

   this.a= Reason;

  this.total=parseInt(this.a)
 
  this.percantage= (this.total*100)/320
  let Reason_To_Move = this.percantage.toFixed(2);
  alert("Your Reason To Move Percantage is : " + Reason_To_Move)
  localStorage.setItem("Reason To Move", JSON.stringify(Reason_To_Move))
   }
   apinext(){

  
  let data = this.justifyDetails;
  
  // this.justifyDetails.forEach( (ele: string) => {
  //   console.log(ele,"Hello");
    
  // });
  //console.log(this.justifyDetails,"Hello");
  // for (this.val of data )
  // {console.log(this.val); } 
  for (const que in data) {
    if (data.hasOwnProperty(que)) {
      //console.log(`${que}: ${data[que]}`);
      let  onequestion = { 
        "question": que, 
        "answers": [data[que]]
    }
    let options = {
      method: 'POST',
      headers: {
          'Content-Type': 
              'application/json;charset=utf-8'
      },
      body: JSON.stringify(onequestion)
  }
  // Fake api for making post requests
  let fetchRes = fetch("http://localhost:8090/sales/adddata", options);
  fetchRes.then(res =>
      res.json()).then(d => {
          console.log(d)
      });

    }
  }


   }
   
   
}