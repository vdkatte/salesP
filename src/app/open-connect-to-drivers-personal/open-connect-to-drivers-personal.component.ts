import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-open-connect-to-drivers-personal',
  templateUrl: './open-connect-to-drivers-personal.component.html',
  styleUrls: ['./open-connect-to-drivers-personal.component.css']
})
export class OpenConnectToDriversPersonalComponent implements OnInit 
{
  data11=11;
   data1=[
  {
  Que1:"Which technologies are used to in the personal sales?",
  Option1:["Artificial Inteligence","Internet of things","CRM","Mobile","AR/VR"],
  marks1:[3,2,1,0,4],
  other:false
  },
  {
  Que1:"How can you use technology in sales to improve performance?",
  Option1:["Customer relationship management","Virtual learning/Virtual proposal","Social media/Websites","Mobile devices and apps"],
  marks1:[3,2,4,1],
  other:false
  },
  {
  Que1:"How do you connect with personal customers?",
  Option1:["Don't use a one-size-fits-all approach","Respond to concerns","Go above and beyond","Follow up","Keep it personal, not transactional","Focus on face-to-face interactions"],
  marks1:[2,1,2,0,3,2],
  other:false
  },
  {
  Que1:"How do you build connection with customers in sales?",
  Option1:["Understand what your customers value","Show you genuinely care","Adapt to their pace","Let your brand be your guide","Model the behaviour you want to see","Remember that relationships are built over time"],
  marks1:[2,1,3,0,3,1],
  other:false
  },
  {
  Que1:"How Personal Selling tools used by the marketers to promote their products. ",
  Option1:["Personal selling is a personal form of communication."," In personal selling, the sales talk is adjusted keeping view customer’s background and needs.","Personal selling is highly flexible. as the message can be adjusted.","Only a limited number of people can be contacted because of time and cost considerations.","The cost per person is quite high in the case of personal selling."," Personal selling efforts take a lot of time to cover the entire market."],
  marks1:[2,1,3,0,3,1],
  other:false
  },
  {
 Que1:"How Personal Selling tools used by the marketers to promote their products. ",
 Option1:["Personal selling is a personal form of communication."," In personal selling, the sales talk is adjusted keeping view customer’s background and needs.","Personal selling is highly flexible. as the message can be adjusted.","Only a limited number of people can be contacted because of time and cost considerations.","The cost per person is quite high in the case of personal selling."," Personal selling efforts take a lot of time to cover the entire market."],
 marks1:[2,1,3,0,3,1],
 other:false
  },
  {
 Que1:"How  Advertising tools used by the marketers to promote their products.",
 Option1:["Advertising is an impersonal form of communication.","Advertising involves transmission of standardised messages, i.e., same message is sent to all the customers in a market segment.","Advertising is inflexible as the message can’ t be adjusted to the needs of the buyer. ","  It reaches masses, i.e., a large number of people can be approached."," In advertising the cost per person reached is very low."," Advertising can cover the market in a short time."],
 marks1:[2,1,3,0,3,1],
 other:false
  },
  {
 Que1:"How do you improve individual sales performance?",
 Option1:["Embrace Technology and Digital Transformation.","Understand & Optimize Revenue Generation.","Tailor Incentives to Strategies that Increase Sales.","Maximize Your Forecasting Accuracy.","Make Customer Experience Your Top Priority."],
 marks1:[2,1,3,0,3],
 other:false
 },
 {
 Que1:"How can you improve your sales techniques?",
 Option1:["Understand what the buyer wants.","Sell in a buyer-responsive manner. ","Use psychology to engage the buyer.","Establish trust with the buyer.","Communicate succinctly.","Act on what the customer is saying."," Demonstrate subject matter expertise."],
 marks1:[2,1,3,0,3,0,0],
 other:false
 },
 {
 Que1:"What is the importance of technology in sales?",
 Option1:["Benefits include improved relationships with customers and improved processes of finding qualified prospects and turning them into customers.","Technology improves the sales communications process and supports effective presentation of products and services."],
 marks1:[5,5],
 other:false
  },
  {
Que1:"What is the benefits of having a technology in sales management?",
Option1:["The automation features of a quality sales management system offer valuable time-saving benefits for your entire team.","These systems have the ability to schedule follow-ups, create important reminders","do other tasks that are essential to the sales process."],
marks1:[5,5,0],
other:false
 },
{
Que1:"What are the challenges in personal selling?",
Option1:["Building trust online.","Marketing and sales teams integration.","Getting a response from prospects.","Closing deals.","Prospecting good leads.","Engaging multiple decision-makers at a company.","Avoiding discounting."," Connecting via the phone (getting in touch)"],
marks1:[1,2,3,2,2,0,0,0],
other:false
},
{
Que1:"What are the possible problems you will encounter when you sell your products?",
Option1:["Your sales process is way too long.","You don't have enough leads.","Your leads are unqualified.","You're wasting your effort on bad-fit prospects.","You're spending too much time on low-value tasks."],
marks1:[1,2,3,2,2],
other:false
},
{
Que1:"What is your biggest challenge in sales?",
Option1:["Trying to Build Trust Virtually.","Getting in Front of Decision-Makers.","Realizing a Solid Product Alone Won't Close Deals.","Struggling With Productivity in the Face of Uncertainty.","Moving Towards a Buyer-First Mentality.","Incorporating Social Selling Into Their Broader Efforts."],
marks1:[1,2,3,2,2,0],
other:false
},
{
Que1:"How important is it to challenge yourself personally and professionally?",
Option1:["Challenges help you discover new skills","jump into new experiences","boost your well-being.","If you're feeling stuck in life"," embracing new challenges gives you the chance to grow.","New challenges can give you the confidence boost you need and encourage you to push further with your personal growth."],
marks1:[1,2,3,2,2,0],
other:false
 },

// add new question here
{
  Que1:"What is the importance of being patient when selling to a customer who doesn't want to buy?",
  Option1:["It can take time to address the customer's objections and build rapport","It can show the customer that you are invested in their needs and interests","It can increase the likelihood of the customer making a purchase in the	"],
  marks1:[10,0,0],
  other:false
},  
 {
  Que1:"When a product fails, what is the first thing you should do?",
  Option1:["Blame others","Ignore it and hope it goes away", "Investigate the cause of the failure","Celebrate the failure as a learning opportunity"],
  marks1:[0,0,10,0],
  other:false
}, 
 {
  Que1:"What is the best way to prevent product failure?",
  Option1:["Don't release the product","Test the product thoroughly before release","Ignore customer feedback","Release the product and hope for the best"],
  marks1:[0,10,0,0],
  other:false
},
 {
  Que1:"How should you communicate a product failure to customers?",
  Option1:["Don't communicate anything","Deny there is a problem", "Be transparent and honest","Blame the customer"],
  marks1:[0,0,10,0],
  other:false
},
 {
  Que1:"Who should take responsibility for a product failure?",
  Option1:["Nobody","The customer","The development team","The marketing team"],
  marks1:[0,0,10,0],
  other:false
},   
 {
  Que1:"How can you turn a product failure into a positive experience?",
  Option1:["Ignore the failure and move on","Blame others for the failure","Use the failure as a learning opportunity","Refuse to acknowledge the failure"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"What is the best way to address a customer complaint about a product failure?",
  Option1:["Ignore the complaint","Tell the customer they are wrong","Apologize and offer a solution","Blame the customer for the failure"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"How can you prevent product failure in the future?",
  Option1:["Ignore the failure and hope it doesn't happen again","Blame others for the failure","Analyze the failure and make improvements","Continue doing what you've always done"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"What is the most important thing to remember when dealing with a product failure?",
  Option1:["Blame others for the failure","Ignore the failure and hope it goes away","Be transparent and honest","Don't acknowledge the failure"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"How can you build customer trust after a product failure?",
  Option1:["Ignore the failure and hope it goes away","Blame others for the failure","Be transparent and honest","Refuse to acknowledge the failure"],
  marks1:[0,0,10,0],
  other:false
}, 
 {
  Que1:"Who should be involved in addressing a product failure?",
  Option1:["Nobody", "The development team", "The marketing team", "Both the development and marketing teams"],
  marks1:[0,0,0,10],
  other:false
},  
{
  Que1:"What is the best way to respond to a negative review of a product failure?",
  Option1:["Ignore the review","Tell the reviewer they are wrong"," Address the reviewer's concerns and offer a solution","Blame the reviewer for the failure"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"How can you learn from a product failure?",
  Option1:["Ignore the failure and move on","Blame others for the failure","Analyze the failure and make improvements","Refuse to acknowledge the failure"],
  marks1:[0,0,0,10],
  other:false
},  
 {
  Que1:"What should you do if a product failure is due to a mistake you made?",
  Option1:["Blame others for the failure","Ignore the failure and hope it goes away","Take responsibility for the mistake and offer a solution","Refuse to acknowledge the failure"],
  marks1:[0,0,10,0],
  other:false
},
 {
  Que1:"What is the first step in making people want your product?",
  Option1:["Create a marketing campaign","Develop a product that meets their needs","Offer a discount","Advertise on social media"],
  marks1:[0,10,0,0],
  other:false
},  
 {
  Que1:"What is the best way to make people want your product?",
  Option1:["Offer a discount"," Advertise heavily","Develop a product that meets their needs","Use celebrity endorsements"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"How can you make people want your product without advertising?",
  Option1:["Offer a discount","Use social media","Develop a product that meets their needs","Use celebrity endorsements"],
  marks1:[0,0,10,0],
  other:false
},  
 {
  Que1:"What is the most important factor in making people want your product?",
  Option1:["Price", "Quality","Availability","Advertising"],
  marks1:[0,10,0,0],
  other:false
},  
 {
  Que1:"How can you differentiate your product from competitors to make people want it?",
  Option1:["Offer a lower price"," Offer more features","Advertise more","Make your product harder to find"],
  marks1:[0,10,0,0],
  other:false
}, 

 {
  Que1:"What is the best way to create buzz around your product?",
  Option1:["Use celebrity endorsements","Advertise heavily","Offer a discount","Make it unique and desirable"],
  marks1:[0,0,0,10],
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
  submited: any;
  aa:any;
  intro:number=0;
  ewc: any;
  a: any;
  b: any;
  c: any;
  d: any;
  e: any;
  total: any;
  percantage: any;
  personalDetails:any={};
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
    if(!this.personalDetails.hasOwnProperty(que)){
      this.personalDetails[que]=[]
    }
    for(let ele in this.personalDetails){
      if(ele ===que){
        const index=[...this.personalDetails[ele]].findIndex((e:any)=>e===data)
        if(index >=0){
          this.personalDetails[ele].splice(index,1)
        }else{
          this.personalDetails[ele]=[...this.personalDetails[ele],data]
        }
      }
    }
  }
  saveData(event:any) { 
    this.engageValue=this.sum
    console.log(this.personalDetails);
    localStorage.setItem("Personal", JSON.stringify(this.engageValue))
    this.check=event.isTrusted
    if(this.check==true){
      alert("Personal Data saved succesfully !!")
    }
 }
 next(){
  localStorage.setItem("val",'true')
  this.router.navigateByUrl('/stage1')
  this._interactionService.roleAccess(this.aa)
   let intro =localStorage.getItem('Introduction')
   let ewc=localStorage.getItem('engageWithConcept')
   let prsnl=localStorage.getItem('Personal')
   let busns=localStorage.getItem('Buisness')
   let atc=localStorage.getItem('Agree To Consider')
   this.a= intro;
  this.b=ewc;
  this.c=prsnl;
  this.d=busns;
  this.e=atc;
  this.total=parseInt(this.a)+parseInt(this.b)+parseInt(this.c)+parseInt(this.d)+parseInt(this.e)
 
  this.percantage= (this.total*100)/2150
  let Open= this.percantage.toFixed(2);
  alert("Your Stage-I Total Percantage is : " + Open)
  localStorage.setItem("Open", JSON.stringify(Open))
 }
 

 
 Previous(){
  this.router.navigateByUrl('/open-connect-to-driver-buisness')
 }
 
 apinext(){

  
  let data = this.personalDetails;
  
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