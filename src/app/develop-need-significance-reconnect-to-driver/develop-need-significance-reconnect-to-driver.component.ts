import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-develop-need-significance-reconnect-to-driver',
  templateUrl: './develop-need-significance-reconnect-to-driver.component.html',
  styleUrls: ['./develop-need-significance-reconnect-to-driver.component.css']
})
export class DevelopNeedSignificanceReconnectToDriverComponent implements OnInit 
{
  data1=[
    {
    Que1:"Is there any need to Reconnect the old Sellers and old Buyers?",
    Option1:["Yes","No","May Be","Not Sure"],
    marks1:[5,3,2,0],
    other:false
    },
    {
    Que1:"Is there any need old Bring Value and Relevancy?",
    Option1:["Yes","No","May Be","Not Sure"],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"How do you reconnect with customers?",
    Option1:["Identify Who You've Lost.","Determine Where in the Process They Left.","Discover Why They Didn't Stick Around.","Reach Out to Your Contacts.","Engage People on Social Media."],
    marks1:[5,2,3,0,0],
    other:false
    },
    {
    Que1:"How do you drive a sales process?",
    Option1:["Map out your current processes.","Define your key performance indicators (KPI) ","Define your key performance indicators (KPI) ","Follow-up and measure performance.","Use technology to simplify monitoring.","Start forecasting your sales.","Increase your sales."],
    marks1:[5,2,3,0,0,0,0],
    other:false
    },
    {
    Que1:"What do you say to reconnect?",
    Option1:["Hey, how've you been?","I haven't seen you in ages!","I haven't seen/talked to you for so long!","How long has it been since I last saw/talked to you?"],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"How do you apologize and reconnect?",
    Option1:["Offer Sincere Apology.","Acknowledge Their Hurt And Don't Get Defensive.","Express Willingness To Do Whatever It Takes.","Be Patient And Don't Push For Forgiveness."],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"How do you say follow up in sales?",
    Option1:["Contact leads quickly. ","Prepare for your call.","Choose strategic call times.","Supplement phone calls with messages.","Begin with a summary.","Add value to the conversation.","Overcome objections.","Include a clear call to action."],
    marks1:[5,2,3,0],
    other:false
    },
  ]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  reconnecttodriverValue: number=0;
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
  f:any;
  g:any;
  total: any;
  percantage: any;
  reconnectTodriverDetails:any={};
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
      if(!this.reconnectTodriverDetails.hasOwnProperty(que)){
        this.reconnectTodriverDetails[que]=[]
      }
      for(let ele in this.reconnectTodriverDetails){
        if(ele ===que){
          const index=[...this.reconnectTodriverDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.reconnectTodriverDetails[ele].splice(index,1)
          }else{
            this.reconnectTodriverDetails[ele]=[...this.reconnectTodriverDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.reconnecttodriverValue=this.sum
      console.log(this.reconnectTodriverDetails);
      localStorage.setItem("reconnect-to-driver", JSON.stringify(this.reconnecttodriverValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Reconnect to Driver Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/stage2')
    this._interactionService.roleAccess(this.aa)
   let fram =localStorage.getItem('Framework')
   let speci=localStorage.getItem('Specifies')
   let imp=localStorage.getItem('Importance')
   let IvsC=localStorage.getItem('Ideal v Current')
   let Clarity=localStorage.getItem('Clarity')
   let LG=localStorage.getItem('Loss N Gains')
   let RtD=localStorage.getItem('reconnect-to-driver')
   this.a= fram;
  this.b=speci;
  this.c=imp;
  this.d=IvsC;
  this.e=Clarity;
  this.f=LG;
  this.g=RtD;
  this.total=parseInt(this.a)+parseInt(this.b)+parseInt(this.c)+parseInt(this.d)+parseInt(this.e)+parseInt(this.f)+parseInt(this.g)
 
  this.percantage= (this.total*100)/1290
  let Devops_Needs= this.percantage.toFixed(2);
  alert("your Stage-II Total Percantage is : " + Devops_Needs)
  localStorage.setItem("Develop Need", JSON.stringify(Devops_Needs))
   }
   Previous(){
    this.router.navigateByUrl('/develop-need-significance-loss-n-gains')
   }
   apinext(){

  
    let data = this.reconnectTodriverDetails;
    
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
    let fetchRes = fetch("http://localhost:8093/sales/adddata", options);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        });
  
      }
    }
  
  
     }
}