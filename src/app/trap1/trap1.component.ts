import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-trap1',
  templateUrl: './trap1.component.html',
  styleUrls: ['./trap1.component.css']
})
export class Trap1Component implements OnInit 
{
  data1=[
    {
    Que1:"How to defend and justify your pricing?",
    Option1:["Review your pricing strategy","Point out your added value","Find your customer's 'pain points'","Differentiate yourself from online competitors","Stand your ground","Stay cool"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you defend against competitors?",
    Option1:["STRENGTHEN BRAND","LEVERAGE THE BENEFITS OF BEING ESTABLISHED","UPGRADE","TAKE ACTIONS AIMED AT SPECIFIC TARGETS","TIME YOUR CAMPAIGN"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How to Defend the Value and Price of Your Product and Service?",
    Option1:["Position your premium product next to your less expensive option","Justify the Value with Price Comparison","Contrast Value with Investment","Demonstrate the value of your product or service"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How would you handle resistance as a salesperson?",
    Option1:["Be aware of the resistance","Agree and take the necessary steps to lower the resistance","Explain who your customers are","Explain the problem they're facing","Explain how your product addresses their needs"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How you handle opposition when selling in business?",
    Option1:["Do something!","Change your tactics","Back up and clarify","Bypass the objection","Convince your customer that they are improving their current arrangements","Rely on your sales instinct","Pre-empt their objection","Acknowledge that they can get a product or service cheaper elsewhere","Avoid argument"],
    marks1:[1,2,3,4,0,0,0,0,0],
    other:false
    },
    {
    Que1:"How to Handle Client Resistance?",
    Option1:["Start With the Right Mindset","The Perspective of the Group","The Perspective of an Elder","The Perspective of Content, Process, and Emotions","Identify Causes Behind Resistance","Ways to Overcome Resistance and Gain Buy-In","Good Faith Response","Use Established Strategies and Tactics"],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"Which Strategies are used to Overcome Resistance to Change?",
    Option1:["Be up-front about the reason for the change","Demonstrate your enthusiasm for the change","Over-communicate throughout the process"],
    marks1:[5,2,3],
    other:false
    },
    {
    Que1:"How do you avoid rejection in sales?",
    Option1:["Learn to Expect Some Rejection","Refuse to Internalize It","Evaluate the Nature of the Rejection","Always Learn from Losses","Seek Support if Necessary","Focus on the Next Opportunity","Reduce Sales Rejections"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you handle business rejection?",
    Option1:["Don't Take It Personally","Make It a Learning Opportunity","Use It to Educate Customers","Take It as an Indicator of Where to Go Next"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How to Defend the Value and Price of Your Product and Service?",
    Option1:["Position your premium product next to your less expensive option","Justify the Value with Price Comparison","Contrast Value with Investment","Demonstrate the value of your product or service"],
    marks1:[1,2,3,4],
    other:false
    },
    // add question here 
    
  {
    Que1:"What is the primary goal of justifying your pricing to potential customers?",
    Option1:["To increase sales","To communicate the value your product or service provides","To lower costs","To increase brand awareness"],
    marks1:[3,3,2,2],
    other:false
  }, 
   {
    Que1:"What is the first step in demonstrating value to customers?",
    Option1:["Offering discounts","Understanding their needs and pain points","Highlighting product features","Promoting brand reputation"],
    marks1:[2,2,3,3],
    other:false
  },
   {
    Que1:"What pricing strategy is best for a product or service that is unique and provides significant value to customers?",
    Option1:["Cost-plus pricing","Market-based pricing","Value-based pricing","Dynamic pricing"],
    marks1:[2,2,3,3],
    other:false
  }, 
   {
    Que1:"What pricing strategy is best for a product or service in a competitive market where price is a major factor in purchasing decisions?",
    Option1:["Cost-plus pricing","Market-based pricing","Value-based pricing","Penetration pricing"],
    marks1:[],
    other:false
  },  
   {
    Que1:"How can you justify a higher price point to customers?",
    Option1:["By offering a lower quality product or service","By offering more discounts","By highlighting the superior quality features or benefits of your product or service compared to competitors","By offering free add-ons that aren't relevant to their needs"],
    marks1:[5,0,5,0],
    other:false
  },
   {
    Que1:"What is cost-plus pricing?",
    Option1:["Setting a price based on market conditions","Setting a price based on the perceived value of the product or service","Setting a price based on the cost of producing a product or providing a service"," Setting a price based on the profit margin you want to achieve"],
    marks1:[2,2,3,3],
    other:false
  },    
   {
    Que1:"Should you always be willing to explain the value of your product or service to justify your pricing?",
    Option1:["TRUE","FALSE"],
    marks1:[0,10],
    other:false
  },  
   {
    Que1:"Is it okay to lower your prices without any explanation if a client has affordability concerns?",
    Option1:["TRUE","FALSE"],
    marks1:[0,10],
    other:false
  },
   {
    Que1:"Should you be transparent about your pricing and explain how it is determined?",
    Option1:["TRUE","FALSE"],
    marks1:[10,0],
    other:false
  },  
   {
    Que1:"Is it helpful to have data and statistics to support your pricing?",
    Option1:["TRUE","FALSE"],
    marks1:[10,0],
    other:false
  },
   {
    Que1:"Should you avoid discussing your pricing with clients until after they have committed to working with you?",
    Option1:["TRUE","FALSE"],
    marks1:[0,10],
    other:false
  },  
   {
    Que1:"Is it appropriate to use high-pressure sales tactics to make clients accept your pricing?",
    Option1:["TRUE","FALSE"],
    marks1:[10,0],
    other:false
  },  
   {
    Que1:"Should you be willing to negotiate on price to meet a client's budget?",
    Option1:["TRUE","FALSE"],
    marks1:[10,0],
    other:false
  },  
   {
    Que1:"Is it important to address client objections and concerns about pricing to build trust and credibility?",
    Option1:["TRUE","FALSE"],
    marks1:[10,0],
    other:false
  }, 
   {
    Que1:"Should you be willing to walk away from a potential client if they are not willing to accept your pricing?",
    Option1:["It depends on the situation.","yes", "no",	"May be"],
    marks1:[10,0,0,0],
    other:false
  },  
   {
    Que1:"Should you always aim to have the lowest possible prices in order to win business?",
    Option1:["TRUE","FALSE"],
    marks1:[0,10],
    other:false
  },  	
   {
    Que1:"What is the first step in defending the value and price of your product or service?",
    Option1:["roviding a detailed breakdown of your costs","Understanding your client's needs and budget","Offering discounts to entice clients","Avoiding discussions of price until after a sale is made"],
    marks1:[],
    other:false
  },  
   {
    Que1:"What is the best way to explain the value of your product or service to a potential client?",
    Option1:["Discussing how it compares to competitors"," Highlighting unique features and benefits","Offering a trial period at a discounted rate","Offering a trial period at a discounted rate"],
    marks1:[10,0,0,0],
    other:false
  }, 
   {
    Que1:"Should you be willing to walk away from a potential client if they are not willing to accept your pricing?",
    Option1:["Yes always be willing to walk away to maintain your pricing integrity","No"],
    marks1:[10,0],
    other:false
  },	
   {
    Que1:"How can addressing client objections about pricing help build trust and credibility?",
    Option1:["It shows that you care about meeting their needs and budget","It demonstrates that you are willing to compromise","It can lead to long-term relationships and repeat business"],
    marks1:[3,3,4],
    other:false
  },
   {
    Que1:"Should you be willing to negotiate on price to meet a client's budget?",
    Option1:["Yes always be willing to negotiate"," No never negotiate on price","Only if the client is a large account with potential for repeat business"," Only if the client is willing to pay a higher rate for added value"],
    marks1:[10,0,0,0],
    other:false
  },     
   {
    Que1:"Is it appropriate to offer discounts to potential clients to entice them to purchase?",
    Option1:["Yes always offer discounts to close the sale"," No  discounts decrease the perceived value of your product or service","Only if the potential client specifically requests a discount","Only if your pricing is higher than competitors"],
    marks1:[10,0,0,0],
    other:false
  },  
   {
    Que1:"How can data and statistics help defend the value and price of your product or service?",
    Option1:["They can prove that your pricing is fair and competitive","They can help you convince clients to buy without discussing price","They are not helpful as clients only care about the end result", "They can be confusing and should be avoided"],
    marks1:[10,0,0,0],
    other:false
  }, 
   {
    Que1:"What is the best way to handle a potential client who expresses concerns about your pricing?",
    Option1:["Lower your prices immediately to meet their budget","Explain the value and benefits of your product or service","Pressure them to accept your pricing using aggressive sales tactics","Avoid discussing the issue and move on to a different topic"],
    marks1:[0,10,0,0],
    other:false
  },  
   {
    Que1:"What is the best way to defend against competitors?",
    Option1:["Lowering your prices","Offering better quality products","Creating unique value propositions","Copying your competitors' strategies"],
    marks1:[0,10,0,0],
    other:false
  },  
   {
    Que1:"How can you differentiate your product or service from your competitors",
    Option1:["By offering a lower price than your competitors","By copying your competitors strategies","By focusing on unique features and benefits","By targeting the same audience as your competitors"],
    marks1:[0,0,10,0],
    other:false
  },  
   {
    Que1:"What is the first step in defending against competitors ?",
    Option1:["Understanding your unique value proposition","Offering lower prices than your competitors"," Focusing on your competitors' weaknesses","Copying your competitors' strategies"],
    marks1:[],
    other:false
  },  
   {
    Que1:"Should you solely focus on your competitors when developing your sales strategy?",
    Option1:["Yes your competitors should be your primary focus","No your customers' needs and preferences should be your primary focus"," Only if your competitors are offering something unique","Only if your competitors are not successful"],
    marks1:[0,10,0,0],
    other:false
  }, 
   {
    Que1:"How can you use customer feedback to defend against competitors?",
    Option1:["By lowering your prices to match your competitors"," By copying your competitors' strategies","By improving your product or service based on customer feedback","By ignoring customer feedback and focusing on your own strategy"],
    marks1:[0,,0,10,0],
    other:false
  }, 
   {
    Que1:"What is the benefit of having a strong brand when defending against competitors?",
    Option1:["Lowering your prices to match your competitors","Copying your competitors strategies","Creating brand loyalty among customers", "Ignoring your competitors altogether"],
    marks1:[0,0,10,0],
    other:false
  },  
   {
    Que1:"How can you use social media to defend against competitors?",
    Option1:["By copying your competitors social media strategy","By ignoring social media altogether","By creating unique and engaging content on social media"," By not using social media at all"],
    marks1:[0,0,10,0],
    other:false
  },  
   {
    Que1:"What is the benefit of offering excellent customer service when defending against competitors ?",
    Option1:["Lowering your prices to match your competitors"," Copying your competitors' customer service strategy","Creating brand loyalty among customers","Ignoring your competitors altogether"],
    marks1:[0,0,10,0],
    other:false
  },  
   {
    Que1:"How can you use promotions and discounts to defend against competitors ?",
    Option1:["By offering the same promotions and discounts as your competitors","By not offering any promotions or discounts at all","By creating unique and limited-time promotions and discounts","By offering permanent discounts"],
    marks1:[0,0,10,0],
    other:false
  },  
   {
    Que1:"What is the benefit of having a strong online presence when defending against competitors",
    Option1:["Copying your competitors online strategy","Creating brand loyalty among customers","Ignoring your competitors altogether","Offering lower prices than your competitors"],
    marks1:[0,10,0,0],
    other:false
  },  
   {
    Que1:"How can you use product packaging to defend against competitors?",
    Option1:["By using the same packaging as your competitors", "By creating unique and eye-catching packaging","By not using any packaging at all","By using plain and unremarkable packaging"],
    marks1:[0,10,0,0],
    other:false
  },  
   {
    Que1:"How can you maintain customer loyalty in the face of competition?",
    Option1:["By offering the lowest price in the market","By providing exceptional customer service","By copying your competitors marketing strategies"," By lowering your prices to match your competitors"],
    marks1:[],
    other:false
  }, 
   {
    Que1:"What is the best way to handle resistance as a salesperson?",
    Option1:["Ignore the resistance and continue with the sales pitch"," Address the resistance head-on and try to overcome it","End the sales pitch and move on to the next customer","Offer a discount or promotion to overcome the resistance"],
    marks1:[0,0,0,10],
    other:false
  },  
   {
    Que1:"What is the first step in handling resistance?",
    Option1:["Agree with the customer's objection","Disagree with the customer's objection","Ignore the customer's objection","Ask the customer to buy the product anyway"],
    marks1:[10,0,0,0],
    other:false
  },  
   {
    Que1:"How can you show empathy when handling resistance?",
    Option1:["By being aggressive and pushy","By ignoring the customer's objections"," By acknowledging the customers concerns and showing understanding","By offering a discount or promotion"],
    marks1:[0,0,10,0],
    other:false
  },
   {
    Que1:"What is the purpose of asking open-ended questions when handling resistance?",
    Option1:["To close the sale as quickly as possible","To gather more information about the customer's objections","To ignore the customer's objections","To offer a discount or promotion"],
    marks1:[0,10,0,0],
    other:false
  },
  ]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  trap1Value: number=0;
  check: any;
  submited: any;
  aa:any;
  intro:number=0;
  ewc: any;
  a: any;
  total: any;
  percantage: any;
  trap_IDetails:any={};
   constructor(private router:Router,private _interactionService:InteractionService) { }
   
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
      if(!this.trap_IDetails.hasOwnProperty(que)){
        this.trap_IDetails[que]=[]
      }
      for(let ele in this.trap_IDetails){
        if(ele ===que){
          const index=[...this.trap_IDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.trap_IDetails[ele].splice(index,1)
          }else{
            this.trap_IDetails[ele]=[...this.trap_IDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.trap1Value=this.sum
      console.log(this.trap_IDetails);
      localStorage.setItem("Trap 1", JSON.stringify(this.trap1Value))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Trap 1 Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/dashboard')
    this._interactionService.roleAccess(this.aa)
   let Trap_1 =localStorage.getItem('Trap 1')
   this.a= Trap_1;
  this.total=parseInt(this.a)
 
  this.percantage= (this.total*100)/500
  let trap1 = this.percantage.toFixed(2);
  alert("your TRAP-1 Total Percantage is : " + trap1)
  localStorage.setItem("Trap-I", JSON.stringify(trap1))
   }
  
   apinext(){
    let data = this.trap_IDetails;
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
    let fetchRes = fetch("http://localhost:8092/sales/adddata", options);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        });
  
      }
    }

     }
  
}