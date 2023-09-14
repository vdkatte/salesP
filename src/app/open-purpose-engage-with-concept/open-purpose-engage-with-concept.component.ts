import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-purpose-engage-with-concept',
  templateUrl: './open-purpose-engage-with-concept.component.html',
  styleUrls: ['./open-purpose-engage-with-concept.component.css']
})
export class OpenPurposeEngageWithConceptComponent implements OnInit 
{
  data1=[
    {
    Que1:"How do you Create engagement with a Product?",
    Option1:["Understand user's contex","Define Positive and negative app Engagement.","we will Offer Communication Opportunities From Day One.","Serve People What they Love"],
    marks1:[2,3,4,1],
    other:false
    },
    {
    Que1:"How do you engage with a brand?",
    Option1:["Provide brand Value","Run Prize Competitions","Attend Events(and Host Your Own)","Build a Community","Be Consistent","Ask For Feedback"],
    marks1:[3,1,2,0,1,3],
    other:false
    },
    {
    Que1:"How do you engage a product?",
    Option1:["Create great customer experiences","Make your brand relatable and meaningful","Use push notifications","Take advantage of conversational marketing"," Focus on retention.","Sharpen your social media marketing"],
    marks1:[2,1,0,3,2,2]
    },
    {
    Que1:"How do you keep users engaged with your product?",
    Option1:["Provide live chat support"," Focus on product experience","Personalize all customer communication channels","Provide real-time assistance using co-browsing","Use gamification to increase engagement","Create interactive and engaging content"],
    marks1:[2,1,3,1,2,1],
    other:false
    },
    {
    Que1:"How do you attract first clients?",
    Option1:["Make a list","Look for referrals","Work your network","Show it off","Attend industry events"," Build an online presence","Team up with other business owners"],
    marks1:[2,2,0,2,1,2,1],
    other:false
    },
    {
    Que1:"How do you say yes to a customer?",
    Option1:["YES to Respect","YES to Unique Experience","YES to Listen and Respond Quickly","YES to Expert Guidance and Authority","YES to Trust","YES to Consistent Engagement","YES to Confidence","YES to Value That's Superior to Other Options"],
    marks1:[1,2,0,1,1,3,1,1],
    other:false
    },
    {
    Que1:"What are the ways to engage with customers online?",
    Option1:["Build a community or group.","Host a webinar.","Host a webinar.","Co-create.","Celebrate together.","Offer exclusive content.","Respond to feedback.","Engage across multiple channels."],
    marks1:[3,0,1,1,3,1,1],
    other:false
    },
    {
    Que1:"What are the ways to engage with customers online?",
    Option1:["Build a community or group.","Host a webinar.","Host a webinar.","Co-create.","Celebrate together.","Offer exclusive content.","Respond to feedback.","Engage across multiple channels."],
    marks1:[3,0,1,1,3,1,1],
    other:false
     },
    {
    Que1:"How do you engage customers with products?",
    Option1:["Create great customer experiences.","Make your brand relatable and meaningful.","Use push notifications.","Take advantage of conversational marketing."],
    marks1:[3,2,2,3],
    other:false
    },
    {
    Que1:"What is the best way to engage with customers on social media?",
    Option1:["Customers want to feel like they have a relationship with a brand.","Teach your followers.","Make them laugh.","Share interesting content","Sell your products","Create a strategy to move forward."],
    marks1:[3,2,2,3,0,0],
    other:false
    },
    {
    Que1:"How do you stay engaged online?",
    Option1:["Create a distraction-free space. Focusing on online lessons takes patience, discipline, and a quiet space.","Solve  questions.","Take note of it."],
    marks1:[3,2,5],
    other:false
    },
    {
    Que1:"How do you introduce a new product concept?",
    Option1:["Define a selling point. A selling point is a reason your customer may buy your product.","Gather support.","Show enthusiasm.","Train your team.","Let your team demo the product."],
    marks1:[3,2,5,0,0],
    other:false
    },
    {
    Que1:"How do you approach and engage with customers?",
    Option1:["Monitor social media feedback.","Attend industry events.","Solve Customer Question ","Follow up on customer feedback.","Create a customer loyalty program."],
    marks1:[3,2,5,0,0],
    other:false
    },
    {
    Que1:"How do you engage customers in the product development process?",
    Option1:["Crowdsourcing can be spontaneous or deliberate.","Social Listening.","Customer Interaction Data.","Product Advisory Councils.","Key Opinion Leaders.","Customer Forums."],
    marks1:[3,2,5,0,0,0],
    other:false
    },
    {
    Que1:"How do you present ideas to clients?",
    Option1:["Present the Presentation Before the Presentation.","Know Your Audience and Have Your Audience Present.","Use Their Language, Then Make It Better.","Mind the Context","The Art of Alternatives."],
    marks1:[3,2,5,0,0],
    other:false
     },

    //  added new question
    {
      Que1:"How do you win competitors?",
      Option1:["Know Your Customers." ,"Understand the Competition.","Highlight Your Difference.", "Clarify Your Message.","Explore Strategic Partnership Opportunities.",	"Keep Innovating."],
      marks1:[2,2,2,2,2,0],
      other:false
    },  
     {
      Que1:"Which of the following is a key factor in winning competitors ?",
      Option1:["Offering the lowest price","Building strong relationships with customers","Offering a wide variety of products","Aggressively pushing your product"],
      marks1:[0,10,0,0],
      other:false
    },  
     {
      Que1:"Which sales technique is most effective in winning competitors?",
      Option1:["Cold-calling potential customers","Sending unsolicited emails"," Referrals from satisfied customers","Offering discounts"],
      marks1:[0,0,10,0],
      other:false
    },  	
     {
      Que1:"What is the most effective way to differentiate your product from competitors?",
      Option1:["Highlighting unique features and benefits","Offering the lowest price"," Aggressively advertising","Offering promotions and discounts"],
      marks1:[10,0,0,0],
      other:false
    },  
     {
      Que1:"Which of the following is an effective strategy to win competitors ?",
      Option1:["Bad-mouthing your competitors","Focusing solely on selling your product", "Researching your competitors and their products", "Offering free products"],
      marks1:[0,0,10,0],
      other:false
    },	
   
     {
      Que1:"What is the most important skill in winning competitors ?",
      Option1:["Persuasion","Communication","Closing deals","Product knowledge"],
      marks1:[0,10,0,0],
      other:false
    }, 
     {
      Que1:"Which of the following is an effective way to handle a competitive sales situation?",
      Option1:["Becoming aggressive with the customer","Bad-mouthing your competitors","Identifying and addressing the customer’s needs", "Offering the lowest price"],
      marks1:[0,0,10,0],
      other:false
    },
     {
      Que1:"What is the key to building customer loyalty and winning competitors?",
      Option1:["Offering the lowest price","Providing exceptional customer service","Having a wide variety of products","Aggressively promoting your product"],
      marks1:[0,10,0,0],
      other:false
    },											
     {
      Que1:"Which of the following is an effective way to handle objections from competitors?",
      Option1:["Ignoring the objection and continuing with the sales pitch","Arguing with the customer about the objection","Addressing the objection and offering a solution","Refusing to acknowledge the objection"],
      marks1:[0,0,10,0],
      other:false
    },										
     {
      Que1:"What is the best way to stay ahead of your competitors ?",
      Option1:["Offering the lowest price","Constantly innovating and improving your product","Aggressively advertising","Focusing solely on selling your product	"],
      marks1:[0,10,0,0],
      other:false
    },
     {
      Que1:"Which of the following is an effective way to build trust with potential customers and win competitors?",
      Option1:["Making unrealistic promises","Providing social proof","Offering the lowest price","Not disclosing information about your product"],
      marks1:[0,10,0,0],
      other:false
    },
     {
      Que1:"What is the best way to handle a situation where a competitor offers a lower price?",
      Option1:["Lowering your price","Ignoring the competitor’s offer","Identifying and emphasizing the unique features and benefits of your product", "Offering a discount"],
      marks1:[0,0,10,0],
      other:false
    },  					
     {
      Que1:"What is the most important aspect of a successful sales pitch?",
      Option1:["The price of the product","The features of the product","The benefits of the product","The salesperson’s charisma"],
      marks1:[0,0,10,0],
      other:false
    },
     {
      Que1:"Which of the following is an effective way to close a sale and win competitors?",
      Option1:["Offering a discount","Asking for the sale","Making unrealistic promises","Ignoring the customer’s objections"],
      marks1:[0,10,0,0],
      other:false
    },  
     {
      Que1:"What is the most important factor in convincing a customer to buy from you instead of your competitor?",
      Option1:["Offering the lowest price","Providing exceptional customer service", "Having a wider variety of products","Aggressively promoting your product"],
      marks1:[0,10,0,0],
      other:false
    },
     {
      Que1:"How can you differentiate yourself from your competitors and convince customers to buy from you?",
      Option1:["By offering the lowest price","By providing the highest quality product","By emphasizing your unique features and benefits","By aggressively promoting your product"],
      marks1:[0,0,10,0],
      other:false
    },  
     {
      Que1:"Which of the following is an effective way to convince customers to buy from you instead of your competitor?",
      Option1:["Bad-mouthing your competitors","Ignoring the competition and focusing solely on your product","Highlighting your competitor's weaknesses","Addressing the customer's needs and providing solutions	"],
      marks1:[0,0,0,10],
      other:false
    },  
     {
      Que1:"What is the key to building customer loyalty and convincing customers to buy from you instead of your competitor?",
      Option1:["Offering the lowest price","Providing exceptional customer service","Having a wider variety of products","Aggressively promoting your product"],
      marks1:[0,10,0,0],
      other:false
    },  
     {
      Que1:"How can you gain a competitive advantage and convince customers to buy from you instead of your competitor?",
      Option1:["By offering the lowest price","By providing better quality products","By having a larger marketing budget"," By aggressively promoting your product"],
      marks1:[0,0,10,0],
      other:false
    },  										
     {
      Que1:"What is the best way to convince customers to buy from you instead of your competitor?",
      Option1:["Offering a discount","Highlighting the benefits of your product"," Ignoring the competition and focusing solely on your product","Making unrealistic promises"],
      marks1:[0,10,0,0],
      other:false
    },  
   

  ]
    isChecked:boolean=false;
    val: any;
    clicked:boolean=false;
    values: any[]=[];
    public sum:number=0;
    clickedCheckbox: any;
    engageValue:number=0;
    check: any;
    engageDetails:any={};
     constructor(private router:Router) {
      
      }
   
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
      if(!this.engageDetails.hasOwnProperty(que)){
        this.engageDetails[que]=[]
      }
      for(let ele in this.engageDetails){
        if(ele ===que){
          const index=[...this.engageDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.engageDetails[ele].splice(index,1)
          }else{
            this.engageDetails[ele]=[...this.engageDetails[ele],data]
          }
        }
      }
    }
    saveData(event:any) { 
      this.engageValue=this.sum
      console.log(this.engageDetails);
      localStorage.setItem("engageWithConcept", JSON.stringify(this.engageValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Engage with Concept Data saved succesfully !!")
      }
     
   }
   next(){
    this.router.navigateByUrl('/open-agree-to-consider')
   }
   Previous(){
    this.router.navigateByUrl('/open-purpose-introduction')
   }
   
   
}


