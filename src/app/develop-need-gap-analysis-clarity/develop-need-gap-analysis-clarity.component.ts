import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-develop-need-gap-analysis-clarity',
  templateUrl: './develop-need-gap-analysis-clarity.component.html',
  styleUrls: ['./develop-need-gap-analysis-clarity.component.css']
})
export class DevelopNeedGapAnalysisClarityComponent implements OnInit 
{
  data1=[
    {
    Que1:"How many days will you required to you for selling 100 products?",
    Option1:["10 + days","8 to 10 days","6 to 8 days","4 to 6 days","less than 4 days"],
    marks1:[1,2,3,2,2],
    other:false
    },
    {
    Que1:"How many products are sold out after one month?",
    Option1:["1500+","1000 to 1500","500 to 1000","1 to 500"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"How do you promote a product?",
    Option1:["Offer loyal customers an exclusive preview","Use a special introductory offer","Make use of Google My Business","Run a social media contest","Spread the word via email","Write a blog post","Host an event","Offer a complimentary upgrade"],
    marks1:[2,2,1,1,1,1,1,1],
    other:false
    },
    {
    Que1:"How do you talk to customers clearly?",
    Option1:["Personalize the interaction","Avoid negative phrases","Use positive language with a touch of empathy","Listen closely and avoid interrupting the customer","Use consistent brand vocabulary","Give thorough answers to technical questions"],
    marks1:[2,2,3,1,1,1],
    other:false
    },
    {
    Que1:"Which are the sales cycle with stages?",
    Option1:["Approach the client.","Discover client needs.","Provide a solution.","Close the sale.","Complete the sale and follow up."],
    marks1:[2,2,3,1,2],
    other:false
    },
   {
    Que1:"Which are the methods of communicating with the customers?",
    Option1:["E-mail.","Website","Phone Technology.","Text Messaging.","Web Chat.","Social Media","Video Messaging."],
    marks1:[2,2,3,1,2,0],
    other:false
    },
    {
    Que1:"which is the best way to speak clearly?",
    Option1:["Handwritten Notes.","Be relaxed and confident using relaxation exercises.","Use abdominal breathing for speech.","Speak with pauses instead of filler words.","Be concise.","Use warmth & kindness.","Use a varied intonation pattern.","Use a full resonant voice."],
    marks1:[2,2,3,1,2,0,0,0],
    other:false
    },
    {
    Que1:"In which way will you promote your product?",
    Option1:["participating in trade shows","conferences","community activities ","networking events."],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"Which are four main methods of promoting your product?",
    Option1:["Where will you sell your product?","Where does your target audience shop?","What distribution channels are best to reach your target market?"],
    marks1:[5,5,0],
    other:false
    },
    {
    Que1:"Which are four main methods of promoting your product?",
    Option1:["Where will you sell your product?","Where does your target audience shop?","What distribution channels are best to reach your target market?"],
    marks1:[5,5,0],
    other:false
    },
    {
    Que1:"Which  channels do you use to market reach your customer?",
    Option1:["Search engine marketing","Social media marketing.","Display advertising.","Digital PR.","Digital partnerships.","Digital messaging."],
    marks1:[5,5,0,0,0,0],
    other:false
    },
    {
    Que1:"How long have you been thinking about this?",
    Option1:["1 day","2 day to 4 day ","5 day to 6 day ","7 day or moe "],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"How do you clarify things with customers?",
    Option1:["Use Images to Show.","Use Lists for Processes.","Ask for Clarification Instead of Assuming.","Link Wisely.","Leave the Conversation Open."],
    marks1:[5,5,0,0,0],
    other:false
    },
    {
    Que1:"Which are the four techniques of clarification?",
    Option1:["exploring"," paraphrasing","reflecting","restating"],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"How do you ask a customer to clarify a question?Which Starting with words",
    Option1:["how","when","where", "what"],
    marks1:[5,5,0,0],
    other:false
    },
    {
    Que1:"How do you clarify customer doubts?",
    Option1:["Customers ask two basic types of questions.","Show your domain expertise.","Make sure everyone understands.","Provide an expert point of view.","Redirect inane and unfair questions.","Respond with metaphors.","Demeanor speaks volumes."],
    marks1:[5,5,0,0,0,0,0],
    other:false
    },
    {
    Que1:"How do you deliver clarity?",
    Option1:["Consider your audience.","Say exactly what you mean.","Avoid jargon.","Keep it short and simple.","Ask for a playback.","Over-communicate.","Choose the right medium for the message."],
    marks1:[5,5,0,0,0,0,0],
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
    clarityValue: number=0;
    clarityDetails:any={};
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
      if(!this.clarityDetails.hasOwnProperty(que)){
        this.clarityDetails[que]=[]
      }
      for(let ele in this.clarityDetails){
        if(ele ===que){
          const index=[...this.clarityDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.clarityDetails[ele].splice(index,1)
          }else{
            this.clarityDetails[ele]=[...this.clarityDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.clarityValue=this.sum
      console.log(this.clarityDetails);
      localStorage.setItem("Clarity", JSON.stringify(this.clarityValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Clarity Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/develop-need-significance')
   }
   previous(){
    this.router.navigateByUrl('/develop-need-gap-analysis-ideal-v-current')
   }
}