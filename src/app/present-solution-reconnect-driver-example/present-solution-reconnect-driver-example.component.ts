import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-present-solution-reconnect-driver-example',
  templateUrl: './present-solution-reconnect-driver-example.component.html',
  styleUrls: ['./present-solution-reconnect-driver-example.component.css']
})
export class PresentSolutionReconnectDriverExampleComponent implements OnInit 
{
  data1=[
    {
      Que1:"What are key Reconnect drivers examples?",
      Option1:["key ReConnect drivers include location customer satisfaction performance relating to costs employee engagement or turnover and profitability.", "Companies should only pick a few key drivers communicate them to staff and monitor them."],
      marks1:[5,5],
      other:false
    },
     {
      Que1:"What are business drivers give example?",
      Option1:["Business drivers are the key inputs and activities that drive the operational and financial results of a business.","Common examples of business drivers are salespeople number of stores website traffic number and price of products sold units of production"],
      marks1:[5,5],
      other:false
    },
    {
      Que1:"Environmental Conservation is a key driver of reconnect initives.",
      Option1:["True","False"],
      marks1:[10,0],
      other:false
    },
     {
      Que1:"Promoting Fossil fuel consumption is a Reconnect driver",
      Option1:["True","False"],
      marks1:[10,0],
      other:false
    },
     {
      Que1:"Affordable housing initiatives are not considered a reconnect driver",
      Option1:["True","False"],
      marks1:[10,0],
      other:false
    },  
    {
      Que1:"Waste reduction and recycling is a Reconnect principles",
      Option1:["True","False"],
      marks1:[0,10],
      other:false
    },  
   
    {
      Que1:"Deforestation for agriculture allign with reconnect principles",
      Option1:["True","False"],
      marks1:[0,10],
      other:false
    }, 
    {
      Que1:"Social equality is not consider a reconnect driver",
      Option1:["True","False"],
      marks1:[0,10],
      other:false
    },  
   
  ]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  reconnecttodriverexampleValue: number=0;
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
  f: any;
  g: any;
  total: any;
  percantage: any;
  exampleDetails:any={};
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
      if(!this.exampleDetails.hasOwnProperty(que)){
        this.exampleDetails[que]=[]
      }
      for(let ele in this.exampleDetails){
        if(ele ===que){
          const index=[...this.exampleDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.exampleDetails[ele].splice(index,1)
          }else{
            this.exampleDetails[ele]=[...this.exampleDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.reconnecttodriverexampleValue=this.sum
      console.log(this.exampleDetails)
      localStorage.setItem("reconnect-to-driver-example", JSON.stringify(this.reconnecttodriverexampleValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Example Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/stage3')
    this._interactionService.roleAccess(this.aa)
     let Ove =localStorage.getItem('Overview')
     let Cri=localStorage.getItem('Critical Issue')
     let Com=localStorage.getItem('Comman Standards')
     let Why=localStorage.getItem('Why You')
     let Evi=localStorage.getItem('Evidence')
     let Imp=localStorage.getItem('Impact')
     let exa=localStorage.getItem('reconnect-to-driver-example')

     this.a= Ove;
    this.b=Cri;
    this.c=Com;
    this.d=Why;
    this.e=Evi;
    this.f=Imp;
    this.g=exa;
    this.total=parseInt(this.a)+parseInt(this.b)+parseInt(this.c)+parseInt(this.d)+parseInt(this.e)+parseInt(this.f)+parseInt(this.g)
   
    this.percantage= (this.total*100)/670
    let Present_Solution = this.percantage.toFixed(2);
    alert("Your Stage-III Total Percantage is : " + Present_Solution)
    localStorage.setItem("Present Solution", JSON.stringify(Present_Solution))
   }
   Previous(){
    this.router.navigateByUrl('/present-solution-reconnect-driver-impact')
   }
   apinext(){

  
    let data = this.exampleDetails;
    
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
    let fetchRes = fetch("http://localhost:8095/sales/adddata", options);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        });
  
      }
    }
  
  
     }
}
