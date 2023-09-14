import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-trap2',
  templateUrl: './trap2.component.html',
  styleUrls: ['./trap2.component.css']
})
export class Trap2Component implements OnInit 
{
  data1=[
    {
    Que1:"How do you handle distracted customers?",
    Option1:[" Offer relevant content — online","Mind your store's decompression zone","Make sure your associates know how to keep shoppers interested"," Offer relevant content — offline","Spruce up your store displays"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"As per you which are distractions in the workplace?",
    Option1:["Social media","Email","Conversations with co-worker","Meeting"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you control distraction of attention?",
    Option1:["Keep Your Vision and Goals in Mind"," Clarify Your Day Before You Start","Reduce the Chaos of Your Day","Do Those Tasks as Soon as Possible","Focus on the Smallest Part of Your Work at a Time","Visualize Yourself Working"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How can customer service avoid distractions?",
    Option1:["Block out all distractions that aren't related to that task","Focus on the task without distraction until the timer goes off","Re-evaluate"],
    marks1:[3,2,5],
    other:false
    },
    {
    Que1:"How would you control customer distraction of attention?",
    Option1:["Keep Your Vision and Goals in Mind","Clarify Your Day Before You Start","Reduce the Chaos of Your Day","Do Those Tasks as Soon as Possible","Focus on the Smallest Part of Your Work at a Time","Visualize Yourself Working","Control Your Internal Distractions"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you prevent distractions and focus on goals?",
    Option1:["Complete important tasks first, then move on to smaller tasks","Learn how to focus on one goal at a time by avoiding multitasking","Remove distractions","Practice mindfulness on a regular basis","Take short breaks","Skip the procrastination","Create tomorrow's task list at the end of the day"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you grab customers attention?",
    Option1:["Build your unique value proposition","Build trust","Have a crystal clear plan","Figure out who the right customers are","Understand prospects","Create connections with potential customers","Reach prospects via different communication channels","Inform customers about vital information"],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you respond to difficult customers?",
    Option1:["Practice active listening","Repeat back what your customers say","Thank them for bringing the issue to your attention","Explain the steps you'll take to solve the problem","Set a time to follow up with them, if needed","Be sincere","Highlight the case's priority"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you train your a distracted salesperson?",
    Option1:["Avoid Multitasking","Eliminate Distractions","Keep a Notebook With You At All Times","Use the Pomodoro Technique","Deliberately Get Bored","Use Breathwork to Come Back to the Moment"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you deal with urgent tasks at work?",
    Option1:["Have a list that contains all tasks in one","Identify what's important: Understanding your true goals","Highlight what's urgent","Prioritize based on importance and urgency","Avoid competing priorities","Consider effort","Review constantly and be realistic"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you say urgent professionally?",
    Option1:["Promptly","At your earliest convenience","Whenever you’re able"],
    marks1:[5,2,3],
    other:false
    },
    // new quetion
    {
      Que1:"Is it important to acknowledge distracted customers?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },
      {
      Que1:"Should you continue talking to distracted customers without trying to re-engage them?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },
       {
      Que1:"Is it helpful to offer a solution to the customer's distraction?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },
     {
      Que1:"Should you assume that a distracted customer is not interested in your product or service?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    }, 
     {
      Que1:"is it important to try to understand why a customer is distracted?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you interrupt a distracted customer to get their attention?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
   {
      Que1:"Is it appropriate to use humor to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Is it important to maintain eye contact with distracted customers?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
   {
      Que1:"Should you give up on a distracted customer and move on to the next one?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
     {
      Que1:"Should you speak louder to get the attention of a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
     {
      Que1:"Is it helpful to ask open-ended questions to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you take the distraction personally?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
     {
      Que1:"Is it important to stay calm when dealing with distracted customers?",
      Option1:["TRUE","FALSE"],
      marks1:[],
      other:false
    },  
     {
      Que1:"Should you rush the conversation to avoid losing the customer's attention?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
   {
      Que1:"Is it appropriate to use props or visual aids to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you make assumptions about what the customer is interested in based on their distraction?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
     {
      Que1:"Is it important to listen actively to a distracted customer to understand their needs and interests?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you use guilt or shame to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Is it helpful to summarize the conversation to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you take a distracted customer's behavior personally and become defensive?",
      Option1:["True","FALSE"],
      marks1:[],
      other:false
    },  
     {
      Que1:"What is the best approach when dealing with a distracted customer?",
      Option1:["Ignore them","Continue talking without interruption","Try to re-engage them", "Talk louder to get their attention"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"Should you assume that a distracted customer is not interested in your product or service?",
      Option1:["Yes", "No", "It depends on the situation", "None of the above"],
      marks1:[5,0,5,0],
      other:false
    }, 
     {
      Que1:"Is it appropriate to use humor when trying to re-engage a distracted customer?",
      Option1:["yes" ,"no","It depends on the customer's personality", " None of the above"],
      marks1:[5,0,5,0],
      other:false
    },  
     {
      Que1:"Should you interrupt a distracted customer to get their attention?",
      Option1:["yes","no",	"It depends on the customer's personality", " None of the above"],
      marks1:[5,0,5,0],
      other:false
    },  
     {
      Que1:"Is it important to understand why a customer is distracted?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you take a distracted customer's behavior personally?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    }, 
     {
      Que1:"Is it helpful to offer a solution to the customer's distraction?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you rush the conversation to avoid losing the customer's attention?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
     {
      Que1:"Is it appropriate to use guilt or shame to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },
   
     {
      Que1:"Should you use props or visual aids to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:"Should you speak louder to get the attention of a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
     {
      Que1:"Is it helpful to ask open-ended questions to re-engage a distracted customer?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    },  
     {
      Que1:" it appropriate to make assumptions about what the customer is interested in based on their distraction?",
      Option1:["TRUE","FALSE"],
      marks1:[0,10],
      other:false
    },  
     {
      Que1:"Is it important to listen actively to a distracted customer to understand their needs and interests?",
      Option1:["TRUE","FALSE"],
      marks1:[10,0],
      other:false
    }, 
     {
      Que1:"Which of the following is a common distraction in the workplace?",
      Option1:["Music","Cleanliness","Productivity"," None of the above"],
      marks1:[],
      other:false
    }, 
   
     {
      Que1:"Which of the following is an example of a visual distraction in the workplace?",
      Option1:["Overcrowded workspace","Phone calls"," A noisy coworker","None of the above"],
      marks1:[10,0,0,0],
      other:false
    }, 
     {
      Que1:"Which of the following is an example of an auditory distraction in the workplace?",
      Option1:["Visual clutter","Poor lighting","Loud conversations","None of the above"],
      marks1:[10,0,0,0],
      other:false
    },  
     {
      Que1:"Which of the following is an example of an environmental distraction in the workplace?",
      Option1:["Personal problems","Poor communication"," Uncomfortable furniture", "None of the above"],
      marks1:[0,0,10,0],
      other:false
    }, 
     {
      Que1:"Which of the following is an example of a technological distraction in the workplace?",
      Option1:["Email notifications"," A messy desk","Personal problems","None of the above"],
      marks1:[10,0,0,0],
      other:false
    },      
  ]
  isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  trap2Value: number=0;
  Trap: number=0;
  check: any;
  submited: any;
  aa:any;
  intro:number=0;
  ewc: any;
  a: any;
  total: any;
  total1: any;
  percantage: any;
  n:any;
  tr: any;
  trap_IIDetails:any={};
   constructor(private router:Router,private _interactionService:InteractionService) { }
   @Input() item1=0;
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
      if(!this.trap_IIDetails.hasOwnProperty(que)){
        this.trap_IIDetails[que]=[]
      }
      for(let ele in this.trap_IIDetails){
        if(ele ===que){
          const index=[...this.trap_IIDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.trap_IIDetails[ele].splice(index,1)
          }else{
            this.trap_IIDetails[ele]=[...this.trap_IIDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.trap2Value=this.sum
      console.log(this.trap_IIDetails);
      localStorage.setItem("Trap 2", JSON.stringify(this.trap2Value))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Trap 2 Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/dashboard')
    let trap=localStorage.getItem('Trap 2')
     this.a= trap;
     this.total=parseInt(this.a)
     this.percantage= (this.total*100)/500
  let n = this.percantage.toFixed(2);
  alert("Your TRAP-2 Total Percantage is : " + n)
  localStorage.setItem("Trap-II", JSON.stringify(n))

   }  
   apinext(){

  
    let data = this.trap_IIDetails;
    
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
    let fetchRes = fetch("http://localhost:8092/sales/adddata", options);
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        });
  
      }
    }
  
  
     }
  
  }