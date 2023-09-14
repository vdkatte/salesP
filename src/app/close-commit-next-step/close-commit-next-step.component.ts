import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-close-commit-next-step',
  templateUrl: './close-commit-next-step.component.html',
  styleUrls: ['./close-commit-next-step.component.css']
})
export class CloseCommitNextStepComponent implements OnInit 
{
  data1=[
    {
    Que1:"If customer buy product and if this product does not work properly then  can you will give him service?",
    Option1:["Yes","No","Not Sure","Depends on Why is not working"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"Can u provide us customer feedback ?",
    Option1:["Yes","No","May Be","Not Yet Decided"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you close a sales cycle?",
    Option1:["Find leads","Nurture new customers","Close the deal","Overcome objection","Present to prospect"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you close a successful sales?",
    Option1:["Identify the decision maker","Be real","A client can sense if you are being genuine during the sales process","Create a sense of urgency","Overcome objections","Know your competition","Watch what you say!"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
      Que1:"How do you close deal with  customer?",
      Option1:["Be impassive","Don't get upset","Accept the opinion of your client","Focus your speech on your client","Care about your client","Overcome objections","Take initiatives","Don't feel superior"],
      marks1:[1,2,3,4,0,0,0,0],
      other:false
      },
      {
      Que1:"Which closing tactics are you used?",
      Option1:["Now or Never Closes","Summary Close","Sharp Angle Closes","Question Closes","Assumptive Closes","Take Away Closes","Soft Close"],
      marks1:[1,2,3,4,0,0,0],
      other:false
      }
  ]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  nextStepValue: number=0;
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
  nextStepDetails:any={};
  total: any;
  percantage: any;
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
      if(!this.nextStepDetails.hasOwnProperty(que)){
        this.nextStepDetails[que]=[]
      }
      for(let ele in this.nextStepDetails){
        if(ele ===que){
          const index=[...this.nextStepDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.nextStepDetails[ele].splice(index,1)
          }else{
            this.nextStepDetails[ele]=[...this.nextStepDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.nextStepValue=this.sum
      console.log(this.nextStepDetails);
      localStorage.setItem("nextStep", JSON.stringify(this.nextStepValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Next Step Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/stage4')
    this._interactionService.roleAccess(this.aa)
    let Anticipate =localStorage.getItem('Anticipate')
    let Close=localStorage.getItem('Close Specifies')
    let Agreement=localStorage.getItem('Agreement')
    let Alternatives=localStorage.getItem('Alternatives')
    let Summarise=localStorage.getItem('Summarise')
    let next=localStorage.getItem('nextStep')

    this.a= Anticipate;
   this.b=Close;
   this.c=Agreement;
   this.d=Alternatives;
   this.e=Summarise;
   this.f=next;
   this.total=parseInt(this.a)+parseInt(this.b)+parseInt(this.c)+parseInt(this.d)+parseInt(this.e)+parseInt(this.f)
  
   this.percantage= (this.total*100)/180
   let Close1 = this.percantage.toFixed(2);
   alert("Your Stage-IV Total Percantage is : " + Close1)
   localStorage.setItem("Close", JSON.stringify(Close1))
   }
   Previous(){
    this.router.navigateByUrl('/close-commit-summarise')
   }
   apinext(){

  
    let data = this.nextStepDetails;
    
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
    let fetchRes = fetch("http://localhost:8096/sales/adddata", options);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        });
  
      }
    }
  
  
     }
}
