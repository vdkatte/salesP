import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-decision-to-move-uncertain',
  templateUrl: './decision-to-move-uncertain.component.html',
  styleUrls: ['./decision-to-move-uncertain.component.css']
})
export class DecisionToMoveUncertainComponent implements OnInit 
{
  data1=[
    {
    Que1:"How do you make a decision to move forward?",
    Option1:["Prepare intelligently with a structured planning tool","Empower your team, appreciate and support their decisions","Aim for awesome, not perfection","Know the acceptable outcomes before you begin"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you move forward from the situation?",
    Option1:["Believe in Yourself","Go Towards the Fear","Remember You're Flexible and Resilient","Don't Make It Personal"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you move a sales pipeline?",
    Option1:["Get to know your leads better","Offer Help","Look for stalled stages","Create urgency","Ask questions"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you move customers down the funnel?",
    Option1:["Email Marketing","Content Marketing","E-Books: More Information","Define Buyer Personas","Final Deal","The Funnel Will Always Leak"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you move your customers?",
    Option1:["Communicate","Notify priority customers of disruptions personally","Move carefully","Be aware of market shifts","Look for new customers"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do you move from sales to customer success?",
    Option1:["Relationship Management","Problem Solving"],
    marks1:[5,5],
    other:false
    },
    {
    Que1:"Which  keys are uased  steps to move ahead to your customers?",
    Option1:["Set up or tune up effective feedback mechanisms","Identify customers' next problems, needs or desires not products or services","Find the alternative to you","Pay attention to existing customers","Find out who your detractors are—and what they're saying about you"],
    marks1:[1,2,3,4,0],
    other:false
    },
    {
    Que1:"How do I make my smart business move?",
    Option1:["Establish a Social Media Presence.","Set Attainable Goals","Apply for Financial Bailout Programs","Listen to Your Customers' Needs","Find the Right Partners","Appreciate Your Employees"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you move forward in business?",
    Option1:["Set Goals That Stretch You","Focus on Customers","Always Be Learning","Learn To Delegate","Increase Your Productivity","Stay Current With Technology","Try Different Marketing Tactics"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you overcome uncertainty in marketing?",
    Option1:["Don't get defensive, get smart","Think about how you can diversify your investments","Look for where there are gaps or opportunities","Invest in human capital","Invest in solutions for agile operations","Be transparent with your workforce"],
    marks1:[1,2,3,4,0,0],
    other:false
    },
    {
    Que1:"How do you reduce uncertainty?",
    Option1:["Avoid traps of the past","Be ever-curious, assume nothing","Practice your skills in collaboration - Invite the unknown, and stay humble","Think Dragonfly","Work the problem","Become the 'Restless Experimenter'","Getting Closure"],
    marks1:[1,2,3,4,0,0,0],
    other:false
    },
    {
    Que1:"How do you make an uncertain decision?",
    Option1:["Have a vision of what you wish to achieve, rather than comparing alternatives","Form a group within which dissenting voices can make themselves heard","Do not wait for more information before taking action","Create options and boost reversibility"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you reduce uncertainty and doubt?",
    Option1:["Ground Yourself in Reality","Recognize That You're Not Alone","Write Down Your Doubts","Access Your Confidence","Be Vulnerable"],
    marks1:[1,2,3,4,0],
    other:false
    } ,  
    {
    Que1:"How do you manage uncertainty?",
    Option1:["Be kind to yourself.","Reflect on past successes","Develop new skills.","Limit exposure to news.","Avoid dwelling on things you can't control.","Take your own advice.","Engage in self-care","Seek support from those you trust."],
    marks1:[1,2,3,4,0,0,0,0],
    other:false
    } ,    
    {
    Que1:"Which are the main method to reduce uncertainty?",
    Option1:["Avoid traps of the past.","Be ever-curious, assume nothing.","Practice your skills in collaboration - Invite the unknown, and stay humble.","Think Dragonfly.","Work the problem.","Become the Restless Experimenter","Getting Closure."],
    marks1:[1,2,3,4,0,0,0],
    other:false
    } ,
    {
    Que1:"How can a business reduce its uncertainty?",
    Option1:["Don't get defensive, get smart","Think about how you can diversify your investments.","Look for where there are gaps or opportunities.","Invest in human capital.","Invest in solutions for agile operations.","Be transparent with your workforce."],
    marks1:[1,2,3,4,0,0],
    other:false
    } , 
   {
    Que1:"How can you reduce uncertainty in the sales?",
    Option1:["Improve the quality of your customer prospects.","Implement processes across the sales team.","Leverage the power of CRM and engage.","Coach your sales team with vigor.","Create a routine and stick to it."],
    marks1:[1,2,3,4,0],
    other:false
    } , 
    {
    Que1:"How can you be more comfortable with uncertainty?",
    Option1:["Surrender to transitions.","Prepare for change in advance.","Seek out small uncertainties.","Change up your perspective.","Move past worry."],
    marks1:[1,2,3,4,0],
    other:false
    } , 
    {
    Que1:"Why do we need to accept uncertainty?",
    Option1:["Learning to accept uncertainty will not make our need for certainty disappear","it will save us time and energy when we let go of trying to control the uncontrollable."],
    marks1:[5,5],
    other:false
    } , 
    {
    Que1:"How do you respond to uncertainty?",
    Option1:["Let Go.","Envision the Best.","Reflect.","Avoid Avoidance","See the Possibility."],
    marks1:[5,5,0,0,0],
    other:false
    } , 
    {
    Que1:"Which are  reasons for uncertainty?",
    Option1:["missing information","unreliable information","conflicting information","noisy information","confusing information."],
    marks1:[5,5,0,0,0],
    other:false
    } , 
    {
    Que1:"How do you accept the uncertainty of the future?",
    Option1:["Develop new skills.","Limit exposure to news.","Avoid dwelling on things you can't control.","Take your own advice."],
    marks1:[5,5,0,0],
    other:false
    } , 
    {
    Que1:"How do you stay calm in uncertainty?",
    Option1:["Acknowledge Your Anxiety.","Question Your Anxious Thoughts","Practice Media Distancing.","Focus on What You Can Control.","Exercise Your Body and Relax Your Mind.","Do One Thing Each Day That Brings You Joy."],
    marks1:[5,5,0,0,0,0],
    other:false
    } , 
    {
    Que1:"How do you accept the changes in yourself?",
    Option1:["ACCEPT THE SITUATION.","HAVE TRUST IN YOUR JOURNEY.","EMBRACE THE UNKNOWN.","TRY NEW EXPERIENCES AND BECOME RESILIENT.","ACKNOWLEDGE YOUR FEARS.","LOOK AT HOW FAR YOU HAVE COME."],
    marks1:[5,5,0,0,0,0],
    other:false
    } , 
    {
    Que1:"How do you approach a decision maker in sales?",
    Option1:["Use Organization Mapping.","Use Company Hierarchies.","Leverage Common Connections.","Make Gatekeepers Your Allies in Sales Negotiations.","Connect on Social Media.","Reach and Influence Decision Makers."],
    marks1:[5,5,0,0,0,0],
    other:false
    } , 
    {
    Que1:"How do you handle objection in sales?",
    Option1:["Budget","Authority","Need","Timeliness"],
    marks1:[5,5,0,0],
    other:false
    } , 
    {
    Que1:"Who is the key decision maker in sales?",
    Option1:["The buyer trusts the decider to make the best decision for the entire business.","Once he/she selects their vendor of choice","have done their due diligence","can provide evidence to back up the suggestion, they will sign off on the purchase."],
    marks1:[5,5,0,0],
    other:false
    } ,
    {
    Que1:"How do you convince customers in sales?",
    Option1:["Know the difference between a benefit and a feature.","Use vivid but plain language.","Avoid biz-blab and jargon.","Keep the list of benefits short.","Emphasize what's unique to you or your firm.","Make your benefits concrete."],
    marks1:[5,5,0,0,0,0],
    other:false
    } ,
    {
    Que1:"How do you win big in sales?",
    Option1:["Set goals and monitor them.","Study the product extensively.","Ask questions before making a proposal.","Absorb the customers' thoughts and feelings","Uphold integrity and honesty in every sale.","Keep promises.","Be present online."],
    marks1:[5,5,0,0,0,0,0],
    other:false
    } ,
    {
      Que1:"How do you increase sales and attract customers?",
      Option1:["Be Present With Clients And Prospects.","Look At Product-To-Market Fit.","Have A Unique Value Proposition.","Have Consistent Marketing Strategies.","Increase Cart Value And Purchase Frequency.","Focus On Existing Customers.","Focus On Why Customers Buy.","Upsell An Additional Service."],
      marks1:[5,5,0,0,0,0,0,0],
      other:false
      } ,
      {
      Que1:"How do you negotiate with customers in sales?",
      Option1:["Give your price first.","Know your priorities when you walk into the negotiation.","Maintain a collaborative stance.","Stay firm in defending your stance.","Avoid ambiguous language.","Defend your positions with facts.","Remain open to concessions, but don't concede too quickly."],
      marks1:[5,5,0,0,0,0,0],
      other:false
      } ,

  ]
isChecked:boolean=false;
  val: any;
  clicked:boolean=false;
  values: any[]=[];
  sum:number=0;
  clickedCheckbox: any;
  decisionToMoveUncertainValue: number=0;
  check: any;
  submited: any;
  aa:any;
  intro:number=0;
  ewc: any;
  a: any;
  total: any;
  percantage: any;
  uncertainDetails:any={};
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
      if(!this.uncertainDetails.hasOwnProperty(que)){
        this.uncertainDetails[que]=[]
      }
      for(let ele in this.uncertainDetails){
        if(ele ===que){
          const index=[...this.uncertainDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.uncertainDetails[ele].splice(index,1)
          }else{
            this.uncertainDetails[ele]=[...this.uncertainDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.decisionToMoveUncertainValue=this.sum
      console.log(this.uncertainDetails);
      localStorage.setItem("Decision To Move Uncertain", JSON.stringify(this.decisionToMoveUncertainValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Decision To Move Uncertain Data saved succesfully !!")
      }
   }
   next(){
    localStorage.setItem("val",'true')
    this.router.navigateByUrl('/dashboard')
    this._interactionService.roleAccess(this.aa)
   let Decision =localStorage.getItem('Decision To Move Uncertain')

   this.a= Decision;

  this.total=parseInt(this.a)
 
  this.percantage= (this.total*100)/310
  let Decision_To_Move = this.percantage.toFixed(2);
  alert("Your Decision To Move Total Percantage is : " + Decision_To_Move)
  localStorage.setItem("Decision To Move", JSON.stringify(Decision_To_Move))
   }
   apinext(){

  
    let data = this.uncertainDetails;
    
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