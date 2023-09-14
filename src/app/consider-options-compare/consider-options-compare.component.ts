import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-consider-options-compare',
  templateUrl: './consider-options-compare.component.html',
  styleUrls: ['./consider-options-compare.component.css']
})
export class ConsiderOptionsCompareComponent implements OnInit 
{
  data1=[
    {
    Que1:"Which options are used to sell this product?",
    Option1:["Selling on Your Own E-Commerce Website","Selling on Other E-Commerce Platforms","Your Own Physical Storefront","Selling Your Product in Other Stores","Advertising on TV and Radio","Using Pay-Per-Click Ads","Search Engine Optimization (SEO)","Engaging in Social Media Marketing","Email Marketing Method for Selling","Content Marketing Beyond SEO"],
    marks1:[1,2,3,4,0,0,0,0,0,0,0],
    other:false
    },
    {
    Que1:"Which types of option are you used to sell this product?",
    Option1:["Regular Option","Weekly Option","Monthly Option","Quarterly Options","Yearly Options"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How to analyze sales performance?",
    Option1:["Identify the sales data to analyze","Collaborate with Stakeholders","Create and present a sales report","Ask For Help"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"Which things you consider at a time of selling the product?",
    Option1:["Competition","Market share","Customer base","Niches","Marketing strategy","Brand message","Wholesale value"],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"How to compare two products online?",
    Option1:["Google Shopping","PriceGrabber","Total sell in last three month","Customer reviews on products"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How would you differntiate our products with our competitors?",
    Option1:["Offer unbeatable customer services","Lean into your niche","Add personal touch","Used price as a distinguishing factor","Give Your customer options to customize your products"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"What general strategies will you use to compare our products from others?",
    Option1:["Product Design","Marketing","Packaging","Pricing"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How would you consider if my product will be successful?",
    Option1:["Do a test","Talk to potential customers","Ask people to buy now","Do some research","Remain positive","Become the customer","Identify your market"],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"As per you which of the most important factors to consider with options?",
    Option1:["The price of the underlying security","Time","Volatility"],
    marks1:[5,2,3,0],
    other:false
    },
      {
      Que1:"How do you prove consideration?",
      Option1:["Make a promise to the other party","Perform an act (such as provide a service).","Agree not to do something","An offer made by the promisor","An acceptance of the offer by the promise","Consideration in the form of money or a promise to do or not do something","Legality of terms and conditions","Capacity of both parties in mind and age"],
      marks1:[1,2,3,4,0,0,0,0,0],
      other:false
      }    
  ]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  considerOptioncompareValue: number=0;
  check: any;
  submited: any;
  aa:any;
  intro:number=0;
  ewc: any;
  a: any;
  total: any;
  percantage: any;
  copmareDetails:any={};
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
      if(!this.copmareDetails.hasOwnProperty(que)){
        this.copmareDetails[que]=[]
      }
      for(let ele in this.copmareDetails){
        if(ele ===que){
          const index=[...this.copmareDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.copmareDetails[ele].splice(index,1)
          }else{
            this.copmareDetails[ele]=[...this.copmareDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.considerOptioncompareValue=this.sum
      console.log(this.copmareDetails);
      localStorage.setItem("Consider Option Compare", JSON.stringify(this.considerOptioncompareValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Consider Option Compare Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/dashboard')
    this._interactionService.roleAccess(this.aa)
   let Consider =localStorage.getItem('Consider Option Compare')

   this.a= Consider;

  this.total=parseInt(this.a)
 
  this.percantage= (this.total*100)/100
  let Consider_Option = this.percantage.toFixed(2);
  alert("Your Consider Option Total Percantage is : " + Consider_Option)
  localStorage.setItem("Consider Option", JSON.stringify(Consider_Option))
   }
   apinext(){

  
    let data = this.copmareDetails;
    

    for (const que in data) {
      if (data.hasOwnProperty(que)) {
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
    let fetchRes = fetch("http://localhost:8095/sales/adddata", options);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        });
  
      }
    }
  
  
     }
}