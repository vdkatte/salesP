import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-commit-anxieties',
  templateUrl: './commit-anxieties.component.html',
  styleUrls: ['./commit-anxieties.component.css']
})
export class CommitAnxietiesComponent implements OnInit 
{
  data1=[
    {
    Que1:"How do you calm anxiety in sales?",
    Option1:["Build a Positive Environment","Give Your Reps the Tools & Skills They Need to Succeed","Dial Early & Schedule Power Hours","Embrace Rejection","Teach Reps the Art of Power Posing","Somebody to Lean On"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do I gain confidence in selling?",
    Option1:["Be prepared","Speak assertively","Sell a product you love","Change your posture","Stay away from negativity","Dress better"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you manage marketing stress?",
    Option1:["Lean on Project Management Systems to Prioritize Activities","Encourage Team Bonding During Remote Working","Communicate With Your Support System","Ask For Help"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you overcome fear in marketing?",
    Option1:["Face your fears gradually","Any fear is bigger in the beginning but gets smaller as you face it","Creating a plan will help you deal with the root of your fears","Fears are normal when you start something new","Surround yourself with those who are committed to overcome their fears"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How can you be more socially confident?",
    Option1:["Be Aware of Your Body Language","Be mindful of your tone of voice","Become a better listener","Check the facts","Smile"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you commit to customers?",
    Option1:["MAP the sale, don't just get pulled along by it","Collaborate in the sale WITH them, not AT them","Give them a sense of what it's like to work with you","Make everything time related","Ask 'commitment closing questions'How's everything so far?","Have some commitment closing ideas in the kitbag"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How would you make customers interested in your product?",
    Option1:["Offer new customers discounts and promotions","Ask for referral","Recontact old customers","Network","Update your website","Partner with complementary businesses","Promote your expertise","Take advantage of online ratings and review sites"],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you promote a product?",
    Option1:["Offer loyal customers an exclusive preview","Make use of Google My Business","Run a social media contest","Write a blog post","Spread the word via email","Host an event","Offer a complimentary upgrade"],
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
  commitAnxietiesValue: number=0;
  check: any;
  submited: any;
  aa:any;
  intro:number=0;
  ewc: any;
  a: any;
  total: any;
  percantage: any;
  anxietiesDetails:any={};
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
      if(!this.anxietiesDetails.hasOwnProperty(que)){
        this.anxietiesDetails[que]=[]
      }
      for(let ele in this.anxietiesDetails){
        if(ele ===que){
          const index=[...this.anxietiesDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.anxietiesDetails[ele].splice(index,1)
          }else{
            this.anxietiesDetails[ele]=[...this.anxietiesDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.commitAnxietiesValue=this.sum;
      console.log(this.anxietiesDetails);
      localStorage.setItem("Commit Anxieties", JSON.stringify(this.commitAnxietiesValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Commit Anxieties Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/dashboard')
    this._interactionService.roleAccess(this.aa)
   let Commit =localStorage.getItem('Commit Anxieties')

   this.a= Commit;

  this.total=parseInt(this.a)
 
  this.percantage= (this.total*100)/80
  let Commit1 = this.percantage.toFixed(2);
  alert("Your Anxieties Total Percantage is : " + Commit1)
  localStorage.setItem("Commit", JSON.stringify(Commit1))
   }
   apinext(){

  
    let data = this.anxietiesDetails;
    
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