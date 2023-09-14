import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-present-solution-differntiate-why-you',
  templateUrl: './present-solution-differntiate-why-you.component.html',
  styleUrls: ['./present-solution-differntiate-why-you.component.css']
})
export class PresentSolutionDifferntiateWhyYouComponent implements OnInit 
{
  data1=[
    {
    Que1:"How much marketing experience do you have?",
    Option1:["20 + year","15 to 20 Year","10 to 15 Year","5 to 10 year","1 to 5 year","No Experience"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How many products have you sold in your marketing career?",
    Option1:["2000+","1500 to 2000","1000 to 1500","500 to 1000","1 to 500","0"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How you connect with your customer?",
    Option1:["Customized interaction and active response","Follow up","Keep it personal not transactional","Face to face interaction","Social Media","Survey"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How will you maintain a good relationship with your customers?",
    Option1:["Understand what your customers value","Show you genuinely care","Adapt to their pace","Let your brand be your guide","Model the behaviour you want to see"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How many sales person are there in your company?",
    Option1:["80+","60 to 80","40 to 60","20 to 40","less than 20"],
    marks1:[1,2,3,4,0],
    other:false
    },
   {
    Que1:"How do you convince customers to buy from us?",
    Option1:["Be natural and do not use scripts.","Ask about the clients' well-being.","Use names while talking with a client.","-Prove that your products are better than those offered by competitors.","Keep initiating further conversation.","Specify the positive characteristics of the customer."],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"Why attracts customers to buy a product?",
    Option1:["Why attracts customers to buy a product?","Use Direct Response Marketing to Attract Customers.","Give Something Away to Entice New Customers.","Give Your Business a Face Lift to Increase Sales.","Get The (Right) Word Out."],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"Which are the  reasons why customers buy from you?",
    Option1:["Their experiences with you.","Your product or service benefits.","Your trustworthiness and reputation.","The value they receive.","Make transactions easy, safe, and secure. "],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you sell a product to impress customers?",
    Option1:["Respond to Inquiries Quickly.","Prove that You Care About Them","Perks for Loyal Customers.","Understand What They Need.","Provide Genuine Help.","Follow Up","Do Great Work."],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you make strong connections with customers?",
    Option1:["Understand what your customers value.","Show you genuinely care.","Adapt to their pace.","Let your brand be your guide.","Model the behaviour you want to see"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How can you serve customers better?",
    Option1:["Understand what your customers consider to be good customer service.","Take the time to find out customers' expectations.","Follow up on both positive and negative feedback you receive.","Monitor social media platforms for positive and negative comments."],
    marks1:[1,2,3,4,0],
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
    WhyYouValue: number=0;
    whyYouDetails:any={};
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
      if(!this.whyYouDetails.hasOwnProperty(que)){
        this.whyYouDetails[que]=[]
      }
      for(let ele in this.whyYouDetails){
        if(ele ===que){
          const index=[...this.whyYouDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.whyYouDetails[ele].splice(index,1)
          }else{
            this.whyYouDetails[ele]=[...this.whyYouDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.WhyYouValue=this.sum
      console.log(this.whyYouDetails);
      localStorage.setItem("Why You", JSON.stringify(this.WhyYouValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Why You Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/present-solution-differntiate-evidence')
   }
   Previous(){
    this.router.navigateByUrl('/present-solution-differntiate-comman-standards')
   }
}