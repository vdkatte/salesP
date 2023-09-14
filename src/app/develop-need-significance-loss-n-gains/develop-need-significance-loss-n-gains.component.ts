import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-develop-need-significance-loss-n-gains',
  templateUrl: './develop-need-significance-loss-n-gains.component.html',
  styleUrls: ['./develop-need-significance-loss-n-gains.component.css']
})
export class DevelopNeedSignificanceLossNGainsComponent implements OnInit 
{
  data1=[
    {
    Que1:"How do you make profit from a product?",
    Option1:["Decide which market or industry you want to enter","Research your selected market","Determine whether you can make this product better or improve it in some way","Build a version 1 or minimum viable product of your own","Try to sell it to customers"],
    marks1:[1,2,3,2,2],
    other:false
    },
    {
    Que1:"How can I sell my product online for profit?",
    Option1:["Find your products","Identify your niche market","Build your e-commerce website","Set up processes for payment, shipping, and staying in touch","Create high-quality product content","Conduct market research","Create buyer personas","Brand your business"],
    marks1:[1,1,1,1,1,1,2,2],
    other:false
    },
    {
    Que1:"Are You Lossed your old customer? If Answer is Yes then Why You lossed old customer?",
    Option1:["My Answer is'NO'","A poor product or service","Lousy customer service","Price increases","Changes in market conditions"],
    marks1:[2,2,1,0,5],
    other:false
    },
    {
    Que1:"How do you manage Profit&Loss in sales?",
    Option1:["Create P&L statements.","Compare P&L statements.","Make changes to business finances.","Meet with an accountant."],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"How do you Analyse profit and loss statements?",
    Option1:["Comparing year-over-year numbers  as well as industry benchmarking.","Looking at gross profit margin","Looking at EBITDA margin","Looking at operating margin","Looking at net profit margin."],
    marks1:[5,5,0,0,0],
    other:false
    },
    {
    Que1:"Which is the significance of profit and loss account?",
    Option1:["A profit and loss (P&L) statement is an indicator of company health.","The P&L is one of the primary documents you'll need to provide when applying for a loan or other types of funding.","A P&L allows banks and investors to see your business's total income","debt load and financial stability."],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"How do you Analyse financial statements?",
    Option1:["Identify the industry economic characteristics.","Identify company strategies.","Assess the quality of the firm's financial statements.","Analyze current profitability and risk.","Prepare forecasted financial statements."],
    marks1:[5,5,0,0],
    other:false
    },
   {
    Que1:"Which are the  steps in Analysing financial transactions?",
    Option1:["identify and analyze transactions","record transactions to a journal","post journal information to a ledger","prepare an unadjusted trial balance."],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"Which kind of sales appear in P&L?",
    Option1:["The P & L statement contains uniform categories of sales and expenses.","The categories include net sales","costs of goods sold","gross margin","net profit."],
    marks1:[5,5,0,0,0],
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
    lossNgainsValue: number=0;
    lossNgainDetails:any={};
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
      if(!this.lossNgainDetails.hasOwnProperty(que)){
        this.lossNgainDetails[que]=[]
      }
      for(let ele in this.lossNgainDetails){
        if(ele ===que){
          const index=[...this.lossNgainDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.lossNgainDetails[ele].splice(index,1)
          }else{
            this.lossNgainDetails[ele]=[...this.lossNgainDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.lossNgainsValue=this.sum
      console.log(this.lossNgainDetails);
      localStorage.setItem("Loss N Gains", JSON.stringify(this.lossNgainsValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Loss N Gains Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/develop-need-significance-reconnect-to-driver')
   }
   Previous()
   {
  this.router.navigateByUrl('/develop-need-gap-analysis')
   }
}