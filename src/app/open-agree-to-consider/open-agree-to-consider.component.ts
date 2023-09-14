import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-agree-to-consider',
  templateUrl: './open-agree-to-consider.component.html',
  styleUrls: ['./open-agree-to-consider.component.css']
})
export class OpenAgreeToConsiderComponent implements OnInit
{
 data1=[{
  Que1:"What to consider when launching a new product?",
  Option1:["Define Your Target Audience","Know The Problem Youre Solving","Validate Your Product","Know Your Competition And Be Different","Make Sure It Hasn't Been Done Before"," Create A Free Trial Or Demo","Know How To Reach Your Audience","Understand The Buying Journey","Lay Out A Comprehensive Strategic Plan","Secure Your Online Identity"],
  marks1:[1,0,2,1,2,0,0,3,1,0],
  other:false
 },
 {
  Que1:"What do you say to attract customers?",
  Option1:["Beautiful in Its Simplicity. ","Artistically Inspired","Enhance Your Life. ","Enhance Your Beauty. "," Looks so Good on the Outside, It'll Make You Feel ","Good Inside. ","Perfect From Beginning to End."],
  marks1:[2,3,1,0,2,1,1],
  other:false
 },
 {
  Que1:"What can you say to encourage a customer to buy?",
  Option1:["Catch Phrases That Can Encourage Customers to Buy"," Guaranteed. ","Limited Offer. ","Best Selling. "],
  marks1:[3,2,1,4],
  other:false
 },
 {
Que1:"How do you handle a product launch?",
Option1:["Learn about your customer.","Write a positioning statement.","Pitch your positioning to stakeholders.","Plan your go-to-market strategy.","Set a goal for the launch.","Create promotional content.","Prepare your team.","Launch the product."],
marks1:[3,2,1,4,0,0,0,0],
other:false
 },
{
Que1:"What to consider when launching a product?",
Option1:["Timing.","Price.","Packaging.","Your new product's name.","Promotion.","Know your target market.","Know your competition.","Test your new product repeatedly."],
marks1:[3,2,1,4,0,0,0,0],
other:false
},
{
Que1:"What are the  factors to consider when buying a product?",
Option1:["the product","the price","the promotion","the sales channel."],
marks1:[3,2,1,4],
other:false
},
{
Que1:"What do customers consider before buying a product?",
Option1:[" the characteristics of the product","price charged","availability of the product at the required location"],
marks1:[3,2,5],
other:false
},
{
Que1:"What are the  factors people consider when buying a product?",
Option1:["Psychological Factors.","Social Factors.","Cultural Factors.","Economic Factors.","Personal Factors."],
marks1:[3,2,5,0,0],
other:false
 },
{
Que1:"What are  factors that will influence you on buying a product?",
Option1:["Product/Service Reviews.","Peer Recommendations.","Social Media."],
marks1:[3,2,5],
other:false
},
{
Que1:"What are the different types of consumer Behaviour?",
Option1:["complex-buying behavior","dissonance-reducing buying behavior","habitual buying behavior","variety-seeking buying behavior."],
marks1:[3,2,5,0],
other:false
},
{
Que1:"What are the  steps in the customer buying decision?",
Option1:["problem recognition","information search","alternatives evaluation","purchase decision","post-purchase evaluation."],
marks1:[3,2,5,0,0],
other:false
},
{
Que1:"How do you write an agreement between a buyer and a seller?",
Option1:["Specify your location.","Provide the buyer's and seller's information","Describe the goods and services.","State the price and deposit details (if applicable)","Outline payment details.","Provide delivery terms."],
marks1:[3,2,5,0,0,0],
other:false
},

// Added new question here
{
  Que1:"What is the most important skill in convincing customers to buy from you instead of your competitor?",
  Option1:["Persuasion", "Communication", "Closing deals", "Product knowledge"],
  marks1:[0,10,0,0],
  other:false
}, 
 {
  Que1:"What is the key to building trust with customers and convincing them to buy from you instead of your competitor?",
  Option1:["Offering the lowest price","Providing social proof", " Having a larger marketing budget","Not disclosing information about your product"],
  marks1:[0,10,0,0],
  other:false
},  	
 {
  Que1:"What is the most effective way to handle objections from customers about why they should buy from you instead of your competitor?",
  Option1:["Ignoring the objection and continuing with the sales pitch","Arguing with the customer about the objection","Addressing the objection and providing a solution","Refusing to acknowledge the objection"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"Which of the following is an effective way to convince customers to buy from you instead of your competitor?",
  Option1:["Bad-mouthing your competitors","Ignoring the competition and focusing solely on your product","Offering a wider variety of products","Addressing the customer's pain points and providing solutions"],
  marks1:[0,0,0,10],
  other:false
},  
 {
  Que1:"What is the best way to handle a situation where a customer is considering your competitor's product?",
  Option1:[" Ignoring the competitor and focusing solely on your product","Offering a lower price than your competitor","Identifying and emphasizing the unique features and benefits of your product","Making unrealistic promises to the customer"],
  marks1:[0,0,10,0],
  other:false
}, 
 {
  Que1:"What is the most important factor in changing customer behavior?",
  Option1:["Offering incentives","Providing clear communication","Using fear tactics","Ignoring customer objections"],
  marks1:[0,10,0,0],
  other:false
},   
 {
  Que1:"How can you motivate customers to change their behavior?",
  Option1:["By using guilt tactics","By offering rewards for desired behavior","By ignoring the customer's objections","By making unrealistic promises	"],
  marks1:[],
  other:false
},  
 {
  Que1:"What is the most effective way to change a customer's behavior?",
  Option1:["Using fear tactics","Providing incentives","Ignoring the customer's objections","Offering a lower price than competitors"],
  marks1:[0,10,0,0],
  other:false
},  
 {
  Que1:"Which of the following is an effective way to change customer behavior?",
  Option1:["Punishing customers for undesirable behavior","Offering incentives for desirable behavior","Ignoring the customer's objections","Using fear tactics"],
  marks1:[0,10,0,0],
  other:false
},  
 {
  Que1:"What is the key to changing customer behavior?",
  Option1:["Providing clear communication","Using fear tactics","Punishing customers for undesirable behavior","Ignoring the customer's objections"],
  marks1:[10,0,0,0],
  other:false
},  
 {
  Que1:"Which of the following is an effective way to change customer behavior?",
  Option1:["Using guilt tactics"," Ignoring the customer's objections","Offering a lower price than competitors","Providing education and resources"],
  marks1:[0,0,0,10],
  other:false
},  	
 {
  Que1:"What is the most important skill in changing customer behavior?",
  Option1:["Persuasion","Communication","Offering discounts","Using fear tactics"],
  marks1:[],
  other:false
},
 {
  Que1:"What is the best way to handle customer objections when trying to change their behavior?",
  Option1:["Ignoring the objection and continuing with the pitch","Arguing with the customer about the objection","Addressing the objection and providing a solution","Refusing to acknowledge the objection	"],
  marks1:[0,0,10,0],
  other:false
},
 {
  Que1:"Which of the following is an effective way to change customer behavior?",
  Option1:["Using fear tactics"," Providing education and resources","Ignoring the customer's objections","Making unrealistic promises"],
  marks1:[0,10,0,0],
  other:false
},  
 {
  Que1:"What is the key to successfully changing customer behavior?",
  Option1:["Offering rewards for desired behavior","Using guilt tactics","Punishing customers for undesirable behavior","Understanding the customer's needs and providing solutions"],
  marks1:[0,0,0,10],
  other:false
},  
 {
  Que1:"How can you convince customers to change their behavior?",
  Option1:["By ignoring their objections and pushing for the desired behavior","By offering incentives and rewards for the desired behavior","By using fear tactics and threatening consequences for not changing behavior","By making unrealistic promises"],
  marks1:[0,10,0,0],
  other:false
},
 {
  Que1:"What is the most effective way to change customer behavior in the long-term?",
  Option1:["Using fear tactics","Providing education and resources","Punishing customers for undesirable behavior","Ignoring the customer's objections"],
  marks1:[0,10,0,0],
  other:false
}, 
 {
  Que1:"Which of the following is an effective way to change customer behavior?",
  Option1:["Using guilt tactics","Ignoring the customer's objections","Providing education and resources","Offering a lower price than competitors	"],
  marks1:[0,0,10,0],
  other:false
},
 {
  Que1:"How can you make the desired behavior more attractive to customers?",
  Option1:["By using fear tactics"," By offering incentives and rewards for the desired behavior","By ignoring the customer's objections","By making unrealistic promises"],
  marks1:[0,10,0,0],
  other:false
},  

 {
  Que1:"What is the most effective way to justify a higher price to a customer?",
  Option1:["Comparing your product to a lower-priced competitor","Explaining the superior quality of your product", "Using fear tactics to make the customer feel like they need your product","Ignoring the customer's concerns about the price"],
  marks1:[0,10,0,0],
  other:false
},  
 {
  Que1:"How can you justify a higher price to a customer?",
  Option1:["By offering a discount", "By using guilt tactics","By comparing your product to a lower-priced competitor","By explaining the additional benefits of your product"],
  marks1:[0,0,0,10],
  other:false
},	
 {
  Que1:"Which of the following is an effective way to justify a higher price to a customer?",
  Option1:["Ignoring the customer's concerns about the price","Comparing your product to a lower-priced competitor","Using fear tactics","Explaining the unique features and benefits of your product"],
  marks1:[0,0,0,10],
  other:false
},  
 {
  Que1:"What is the most important factor in justifying a higher price to a customer?",
  Option1:["Using fear tactics","Offering a discount","Explaining the value of your product","Ignoring the customer's concerns about the price"],
  marks1:[0,0,10,0],
  other:false
}, 
 {
  Que1:"How can you justify a higher price to a customer who is price-sensitive?",
  Option1:["By offering a discount","By using guilt tactics","By ignoring the customer's concerns about the price","By comparing your product to a lower-priced competitor"],
  marks1:[10,0,0,0],
  other:false
},  
 {
  Que1:"Which of the following is an effective way to justify a higher price to a customer?",
  Option1:["Ignoring the customer's concerns about the price","Using fear tactics","Explaining the superior quality of your product", "Offering a discount"],
  marks1:[0,0,10,0],
  other:false
},
 {
  Que1:"What is the key to justifying a higher price to a customer?",
  Option1:["Comparing your product to a lower-priced competitor","Explaining the unique features and benefits of your product","Using guilt tactics"," Ignoring the customer's concerns about the price"],
  marks1:[],
  other:false
},  
 {
  Que1:"Which of the following is an effective way to justify a higher price to a customer who is price-sensitive?",
  Option1:["Using fear tactics","Ignoring the customer's concerns about the price","Offering a discount","Explaining the superior quality of your product"],
  marks1:[0,0,0,10],
  other:false
},  
 {
  Que1:"How can you justify a higher price to a customer who is focused on the bottom line?",
  Option1:["By using guilt tactics","By offering a discount","By comparing your product to a lower-priced competitor","By ignoring the customer's concerns about the price"],
  marks1:[0,0,10,0],
  other:false
},  					
 {
  Que1:"How can you justify a higher price to a customer who is focused on the bottom line?",
  Option1:["By using guilt tactics","By offering a discount","By comparing your product to a lower-priced competitor","By ignoring the customer's concerns about the price"],
  marks1:[0,0,10,0],
  other:false
},  
{
  Que1:"What is the most important factor in justifying a higher price to a customer who is focused on the bottom line?",
  Option1:["Using guilt tactics","Comparing your product to a lower-priced competitor","Ignoring the customer's concerns about the price","Explaining the additional benefits of your product	"],
  marks1:[0,10,0,0],
  other:false
}, 
  {
  Que1:"How can you justify the value of your product to a potential customer?",
  Option1:["By offering a discount","By using guilt tactics","By explaining the benefits of your product","By ignoring the customer's concerns about the price"],
  marks1:[0,0,10,0],
  other:false
},  







]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  engageValue: number=0;
  check: any;
  agreetoConsiderDetails:any={};
 
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
    if(!this.agreetoConsiderDetails.hasOwnProperty(que)){
      this.agreetoConsiderDetails[que]=[]
    }
    for(let ele in this.agreetoConsiderDetails){
      if(ele ===que){
        const index=[...this.agreetoConsiderDetails[ele]].findIndex((e:any)=>e===data)
        if(index >=0){
          this.agreetoConsiderDetails[ele].splice(index,1)
        }else{
          this.agreetoConsiderDetails[ele]=[...this.agreetoConsiderDetails[ele],data]
        }
      }
    }
   
  }
  saveData(event:any) 
  { 
    this.engageValue=this.sum
    console.log(this.agreetoConsiderDetails);
    localStorage.setItem("Agree To Consider", JSON.stringify(this.engageValue))
    this.check=event.isTrusted
    if(this.check==true){
      alert("Agree to Consider Data saved succesfully !!")
    }
  }
 next()
 {
  this.router.navigateByUrl('/open-connect-to-driver')
 }
 Previous(){
  this.router.navigateByUrl('/open-purpose')
 }
}
 
 

