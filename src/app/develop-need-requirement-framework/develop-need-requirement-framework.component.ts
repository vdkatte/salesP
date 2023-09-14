import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-develop-need-requirement-framework',
  templateUrl: './develop-need-requirement-framework.component.html',
  styleUrls: ['./develop-need-requirement-framework.component.css']
})
export class DevelopNeedRequirementFrameworkComponent implements OnInit 
{
  data1=[
    {
    Que1:"Which Insights are used?",
    Option1:["Market Research","Customer Reasearch","Competitive Reasearch","Product Performance"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"Which analysis framework are u used?",
    Option1:["Segementation","Propositions","Positioning","Bussinessn Cases"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"Which direction are you used?",
    Option1:["Product and Portpolio Strategy","Vision","Roadmaps","Pricing"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"Which Inbound activities are used?",
    Option1:["Discovery and Design","Requirements","Project and partner Management","Operational Readiness and Trails"],
    marks1:[1,2,3,4],
    other:false
    },
    {
    Que1:"In which area you used market segmentation?",
    Option1:["For targeting the customer","How they are similier or different from each other","To raech the targeted customer"],
    marks1:[5,2,3],
    other:false
    },
    {
    Que1:"In which area you consider product capabilities?",
    Option1:["Solution for key benefits","How they are similier or different from each other","How Unique is The Value Proposition"],
    marks1:[5,2,3],
    other:false
    },
    {
    Que1:"In which area you consider sales engagement?",
    Option1:["Where has sales got traction so far","What prospects negative feedback","Where customer get more exicited"],
    marks1:[5,2,3],
    other:false
    },
    {
    Que1:"Why is a sales framework important?",
    Option1:["Having a framework helps less experienced people recognise and adopt the best sales methods.","Frameworks are based on the behaviours of top performers.","Less experienced staff can approximate best practice from the representation","emulate successful techniques without first acquiring equivalent intuition and judgment."],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"What are the benefits of business frameworks?",
    Option1:["Clarity on the requirements of your role as a manager.","Clarity on the role of others in the organisation and how you should interact with them.","Clear accountabilities and authorities for managerial work.","Principles to manage in a way that builds trust and achieves business outcomes."],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"why frameworks for process design?",
    Option1:["A design framework is a set of tools","workflows","protocols","processes for design product. "],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"Why is it important for a salesperson to understand the buyer's needs?",
    Option1:["Not only is understanding buyer needs important in terms of winning competitive deals it's also important","because of the spillover effect that understanding buyer needs creates in other areas of sales opportunities","areas that are seemingly unrelated and outside the control of the sales team."],
    marks1:[5,2,3],
    other:false
    },
    {
    Que1:"What is the basic requirement that is expected from a sales person?",
    Option1:["The salesperson is responsible for greeting customers","helping them find items in the store","ringing up purchases","To be successful as a salesperson you must have excellent communication skills.","A good salesperson meets sales objectives while remaining polite and helpful to customers."],
    marks1:[5,2,3,0,0],
    other:false
      },
    {
    Que1:"What are the important elements of a framework?",
    Option1:["vision","mission","time frame ","objectives."],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"What is the framework for sales funnel?",
    Option1:["A sales funnel, also known as a marketing or conversion funnel","a framework that maps out different stages in the customer journey.","Marketers and sales representatives typically group these stages into three categories","top of funnel, middle of funnel, and bottom of funnel."],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"Why market segmentation is important for sales?",
    Option1:["Market segmentation allows companies to tailor their services","products","marketing to the specific needs of their target group.","brands develop one strategy for all target markets"],
    marks1:[5,2,3,0],
    other:false
    },
    {
    Que1:"How do you segment market sales?",
    Option1:["Define the market you are interested in.","Create market segment using a segmentation technique.","Create segment profiles","Evaluate each segment profile.","Select your target market"],
    marks1:[5,2,3,0,0],
    other:false
    },
    {
    Que1:"How do you apply market segmentation?",
    Option1:["group potential buyers into segments","group products into categories","develop market-product grid and estimate market sizes","select target markets","take marketing actions to reach target markets."],
    marks1:[5,2,3,0,0],
    other:false
    },
    // new question added here
    {
      Que1:"How can you reconnect with customers who have not purchased from you in a while?",
      Option1:["Ignore them and move on to new customers","Reach out to them and offer them a discount","Email them and ask them to buy from you again","Listen to their needs and offer solutions"],
      marks1:[0,0,0,10],
      other:false
    }, 
     {
      Que1:"How can you rebuild a relationship with a customer who has had a bad experience with your company?",
      Option1:["Ignore their complaints and move on","Apologize and offer a solution to their problem", "Blame the customer for the issue","Make excuses for the issue and ignore their complaints	"],
      marks1:[0,10,0,0],
      other:false
    }, 
     {
      Que1:"What is the best way to reconnect with customers who have not responded to your emails or calls?",
      Option1:["Keep sending them messages until they respond","Leave them alone and assume they are not interested","Reach out to them in a different way or through a different channel","Wait for them to reach out to you"],
      marks1:[0,0,10,0],
      other:false
    },
     {
      Que1:"How can you rebuild trust with a customer who has had a bad experience with your company?",
      Option1:["Blame the customer for the issue","Make excuses for the issue and ignore their complaints","Apologize and take responsibility for the issue", "Ignore the issue and hope it goes away"],
      marks1:[0,0,10,0],
      other:false
    }, 
     {
      Que1:"What is the best way to reconnect with customers who have not purchased from you in a while?",
      Option1:["Assume they are not interested and move on","Reach out to them and offer them a discount","Ignore them and focus on new customers"," Offer them a solution to their problems and needs"],
      marks1:[0,0,0,10],
      other:false
    },  
     {
      Que1:"How can you reconnect with a customer who has not responded to your calls or emails?",
      Option1:["Keep trying to contact them until they respond","Assume they are not interested and move on","Reach out to them in a different way or through a different channel","Wait for them to reach out to you"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"How can you rebuild a relationship with a customer who has not been happy with your product or service?",
      Option1:["Ignore their complaints and hope they go away","Blame the customer for the issue","Apologize and offer a solution to their problem","Make excuses for the issue and ignore their complaints"],
      marks1:[],
      other:false
    },  
     {
      Que1:"How can you reconnect with customers who have not been responsive to your marketing efforts?",
      Option1:["Assume they are not interested and move on","Keep sending them messages until they respond","Change your marketing strategy and try again"," Ignore them and focus on new customers"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"How can you rebuild a relationship with a customer who has not been happy with your customer service?",
      Option1:["Ignore their complaints and hope they go awaye", "Blame the customer for the issue","Apologize and offer a solution to their problem", "Make excuses for the issue and ignore their complaints"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"What is the first step in driving a sales process?",
      Option1:["Identifying potential customers","Creating a sales plan","Cold calling","Developing a product"],
      marks1:[0,10,0,0],
      other:false
    },  
     {
      Que1:"What is the purpose of a sales plan?",
      Option1:["To identify potential customers","To set sales targets and goals",	"To create a product","To hire a sales team"],
      marks1:[0,10,0,0],
      other:false
    },  
     {
      Que1:"How do you identify potential customers?",
      Option1:["By cold calling", "By conducting market research", "By guessing", "By waiting for customers to come to you	"],
      marks1:[0,10,0,0],
      other:false
    },  
     {
      Que1:"What is the purpose of a sales pipeline?",
      Option1:["To track sales progress", "To create a product","To identify potential customers"," To hire a sales team"],
      marks1:[10,0,0,0],
      other:false
    },
    { 
      Que1:"How do you qualify leads in a sales process?",
      Option1:["By contacting everyone who shows interest","By guessing who might be interested","By asking questions to determine interest and needs","By waiting for leads to contact you"],
      marks1:[0,0,10,0],
      other:false
    }, 
     {
      Que1:"How do you create a sense of urgency in a sales process?",
      Option1:["By ignoring the customer's timeline","By providing a discount"," By being pushy", "By highlighting the benefits of acting quickly	"],
      marks1:[0,0,0,10],
      other:false
    },  
     {
      Que1:"How do you handle objections in a sales process?",
      Option1:["By ignoring them","By arguing with the customer","By listening and providing solutions","By telling the customer they are wrong"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"What is the purpose of a sales forecast?",
      Option1:["To predict the weather","To predict future sales revenue",	"To hire a sales team","To create a product"],
      marks1:[0,,10,0,0],
      other:false
    },  
     {
      Que1:"What is the role of a sales manager?",
      Option1:["To create a product","To hire a sales team","To set sales targets and goals","To ignore the sales process"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"How do you build relationships with customers in a sales process?",
      Option1:["By being pushy and aggressive","By ignoring the customer's needs","By listening to the customer and providing solutions","By avoiding the customer"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"How do you create a value proposition in a sales process?",
      Option1:["By creating a unique product","By providing a discount","By listening to the customer's needs and offering solutions","By being pushy and aggressive"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"How do you handle a customer who is not ready to buy in a sales process?",
      Option1:["By ignoring them and moving on to someone else","By being pushy and aggressive","By providing more information and building trust","By giving up and assuming they will never buy"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"What is the role of a salesperson in a sales process?",
      Option1:["To create a product","To hire a sales team","To build relationships with customers and sell products", "To ignore customers and hope for the best"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"How do you make a decision to move forward?",
      Option1:["Prepare intelligently with a structured planning tool.","Empower your team appreciate and support their decisions.","Aim for awesome, not perfection.","Know the acceptable outcomes before you begin."],
      marks1:[10,0,0,0],
      other:false
    }, 
     {
      Que1:"",
      Option1:[" How do you move forward from the situation?","  Believe in Yourself.","Go Towards the Fear.  ","Remember You're Flexible and Resilient."],
      marks1:[0,10,0,0],
      other:false
    },  
     {
      Que1:"How do you move a sales pipeline?",
      Option1:[" Get to know your leads better.","Offer Help "," Look for stalled stages.","Create urgency","Ask questions"],
      marks1:[2,2,2,2,2],
      other:false
    },
     {
      Que1:"How do you move customers down the funnel?",
      Option1:["Content Marketing ","Email Marketing", "E-Books: More Information.","Define Buyer Personas","Final Deal","The Funnel Will Always Leak"],
      marks1:[2,2,2,2,1,1],
      other:false
    }, 
   {
      Que1:"How do you move your customers?",
      Option1:["Communicate.","Notify priority customers of disruptions personally.","Move carefully.","Be aware of market shifts.","Look for new customers."],
      marks1:[2,2,2,2,2],
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
      Option1:["Set up or tune up effective feedback mechanisms","Identify customers' next problems needs or desires—not products or services", "Find the alternative to you." ,"Pay attention to existing customers.","Find out who your detractors are—and what they're saying about you.",],
      marks1:[2,2,2,2,2],
      other:false
    },  
     {
      Que1:"How do I make my smart business move?",
      Option1:["Establish a Social Media Presence.","Set Attainable Goals.","Apply for Financial Bailout Programs.","Listen to Your Customers' Needs.","Find the Right Partners.","Appreciate Your Employees"],
      marks1:[2,2,2,2,1,1],
      other:false
    },  
     {
      Que1:"How do you move forward in business?",
      Option1:["Set Goals That Stretch You.","Focus on Customers.","Always Be Learning.","Learn To Delegate","Increase Your Productivity.","Stay Current With Technology.","Try Different Marketing Tactics."],
      marks1:[2,2,2,2,2,0,0],
      other:false
    },  
     {
      Que1:"How do you overcome uncertainty in marketing?",
      Option1:["Don't get defensive, get smart","Think about how you can diversify your investments","Invest in human capital", "Invest in solutions for agile operations","Be transparent with your workforce"],
      marks1:[2,2,2,2,1,1],
      other:false
    },  
     {
      Que1:"How do you reduce uncertainty?",
      Option1:["Avoid traps of the past.","Be ever-curious, assume nothing.","Practice your skills in collaboration - Invite the unknown and stay humble.","Think Dragonfly.","Work the problem.","Become the Restless Experimenter","Getting Closure."],
      marks1:[2,2,2,2,1,1,0],
      other:false
    },  
     {
      Que1:"How do you make an uncertain decision?",
      Option1:["Have a vision of what you wish to achieve rather than comparing alternatives.","Form a group within which dissenting voices can make themselves heard.","Do not wait for more information before taking action.","Create options and boost reversibility."],
      marks1:[2,2,3,3],
      other:false
    },  
   
     {
      Que1:"How do you reduce uncertainty and doubt?",
      Option1:["Ground Yourself in Reality.","Recognize That You're Not Alone.","Write Down Your Doubts.","Access Your Confidence."," Be Vulnerable."],
      marks1:[2,2,2,2,2],
      other:false
    },  
   {
      Que1:"How do you manage uncertainty?",
      Option1:["Be kind to yourself.","Reflect on past successes","Develop new skills.","Limit exposure to news.","Avoid dwelling on things you can't control.","Take your own advice.", "Engage in self-care", "Seek support from those you trust."],
      marks1:[2,2,2,2,2,0,0,0],
      other:false
    },  
   
     {
      Que1:"Which are the main method to reduce uncertainty?",
      Option1:["Avoid traps of the past.","Be ever-curious, assume nothing.","Practice your skills in collaboration - Invite the unknown and stay humble.","Think Dragonfly.","Work the problem.","Become the Restless Experimenter","Getting Closure."],
      marks1:[],
      other:false
    },  
     {
      Que1:"How can a business reduce its uncertainty?",
      Option1:["Don't get defensive get smart","Think about how you can diversify your investments.","Look for where there are gaps or opportunities.","Invest in human capital.","Invest in solutions for agile operations.","Be transparent with your workforce."],
      marks1:[2,2,2,2,1,1],
      other:false
    },  
     {
      Que1:"How can you reduce uncertainty in the sales?",
      Option1:["Improve the quality of your customer prospects.","Implement processes across the sales team.","Leverage the power of CRM and engage.","Coach your sales team with vigor.","Create a routine and stick to it."],
      marks1:[2,2,2,2,2],
      other:false
    },  
   {
      Que1:"How can you be more comfortable with uncertainty?",
      Option1:["Surrender to transitions.","Prepare for change in advance.","Seek out small uncertainties.","Change up your perspective.","Move past worry."],
      marks1:[2,2,2,2,2],
      other:false
    },  
     {
      Que1:"Why do we need to accept uncertainty?",
      Option1:["Learning to accept uncertainty will not make our need for certainty disappear","it will save us time and energy when we let go of trying to control the uncontrollable."],
      marks1:[5,5],
      other:false
    },  
     {
      Que1:"How do you respond to uncertainty?",
      Option1:["Let Go.", "Envision the Best.","Reflect.","Avoid Avoidance","See the Possibility."],
      marks1:[2,2,2,2,2],
      other:false
    },  
     {
      Que1:"Which are  reasons for uncertainty?",
      Option1:["missing information","unreliable information","conflicting information", "noisy information","confusing information."],
      marks1:[2,2,2,2,2],
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
    frameworkValue: number=0;
    frameworkDetails:any={};
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
      if(!this.frameworkDetails.hasOwnProperty(que)){
        this.frameworkDetails[que]=[]
      }
      for(let ele in this.frameworkDetails){
        if(ele ===que){
          const index=[...this.frameworkDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.frameworkDetails[ele].splice(index,1)
          }else{
            this.frameworkDetails[ele]=[...this.frameworkDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.frameworkValue=this.sum
      console.log(this.frameworkDetails);
      localStorage.setItem("Framework", JSON.stringify(this.frameworkValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Framework Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/develop-need-requirement-specifies')
   }
}