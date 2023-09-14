import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-open-purpose-introduction',
  templateUrl: './open-purpose-introduction.component.html',
  styleUrls: ['./open-purpose-introduction.component.css']
})
export class OpenPurposeIntroductionComponent implements OnInit 
{
  data1=[
    {
    Que1:"How you were Introduced to the Customer? ",
    Option1:["Personally","Digitally","Via Newspaper","Via Shareholder","Via Advertisement","Third Party"],
    marks1:[3,2,1,1,1,1],
    other:false
    },
    {
    Que1:"When you were Introduced to the Customer?",
    Option1:["A day Ago","A Week ago","A Month ago","A Quarter ago"," A half Year ago","A  Year ago"],
    marks1:[4,3,1,1,1,0],
    other:false
    },
    {
    Que1:"How do you launch my first product?",
    Option1:["Define a selling point","Gather support","Show enthusiasm","Train your team","Let your team demo the product","We'll give your team a demo","Through Advertisement","we will Prepare a mission statement."],
    marks1:[1,1,0,2,1,2,1,2],
    other:false
    },
    {
    Que1:"How do you handle to a customer who asking for a product?",
    Option1:["Be open and honest","Be grateful for their effort","Be courteous, not scripted","Don’t make promises you can’t keep","Show understanding","Find their real need"],
    marks1:[2,3,2,1,1,1],
    other:false
    },
    {
    Que1:"How do you explain your product to world?",
    Option1:["We arranging the product launch event","Tell the full story","We are explaining the product benefits"],
    marks1:[5,3,2],
    other:false
    },
    {
    Que1:"How do you attract first customers?",
    Option1:["Ask for referrals","Network","Offer discounts and incentives for new customers only","Re-contact old customers"," Improve your website","Create Partnership with complementary businesses","Promote your expertise","Use online reviews to your advantage"],
    marks1:[2,1,0,1,2,1,2,1],
    other:false
    },
    {
    Que1:"How do you introduce a product online?",
    Option1:["Give advertisement on Social media","Add Product e-commerce sites"," Appoint brand ambassador",],
    marks1:[2,5,3],
    other:false
    },
    {
    Que1:"Why do we introduce yourself to customers?",
    Option1:["The good introduction assures the client you are who they should speak to","tailors your expertise to their concerns and telegraphs your experience.","Soothe their one, chief worry, and your client will know they can trust you and will listen during the meeting.",],
    marks1:[2,5,3],
    other:false
    },
    {
   Que1:"How do you start introducing a product?",
    Option1:["Define a selling point. A selling point is a reason your customer may buy your product","Gather support","Show enthusiasm", "Let your team demo the product", "Schedule a launch date","Control your product's life cycle.","we will Prepare a mission statement."],
     marks1:[1,2,2,1,1,1,1,1,0,0],
    other:false
     },
    {
    Que1:"How can you introduce your product?",
    Option1:["Offer loyal customers an exclusive preview.","Use a special introductory offer.","Make use of Google My Business.","Run a social media contest.","Spread the word via email.","Write a blog post.","Host an event.","Offer a complimentary upgrade."],
    marks1:[1,1,1,1,1,1,1,3],
    other:false
   },
    {
   Que1:"can you walk me through how you typically introduce this product to potential customer?",
    Option1:["When i meet the client, be confident and stand tall.","Greet him with a smile and a firm handshake, and state who you are.","Hello, I'm Ken and I'll be reviewing your account today.","Hold the door open for the client if necessary, escorting him to the designated meeting area."],
    marks1:[2,3,2,3],
    other:false
    },
    {
   Que1:"What approach do you Usually take when introducing this new product to a Customer?",
    Option1:["Don't use a one-size-fits-all approach.","Respond to concerns.","Go above and beyond.","Follow up.","Keep it personal, not transactional.","Focus on face-to-face interactions.","Be active on social media.","Grow with your current clients in mind."],
    marks1:[2,3,2,3,0,0,0,0],
    other:false
     },
     {
     Que1:"How do you Higlight The features and benefits of this product during your introduction?",
    Option1:["Define your unique selling proposition. Start by identifying what makes the product unique and different from competitors.","Create a features section","Rank your top features","Discuss outcomes","Use quality images.","Consider your audience.","Incorporate descriptive language."],
    marks1:[2,3,2,3,0,0,0],
    other:false
      },
      {
      Que1:"What are special benefits of products?",
      Option1:["Product benefits are the things a product offers to satisfy the needs, desires and wants of a consumer.","They are what a consumer hopes to get, feel or achieve when he/she uses a product.","Product benefits can either be actual or perceived.","Perceived benefits include the products popularity, its image or its reputation."],
       marks1:[2,3,2,3],
      other:false
        },
        {
      Que1:"What are the strategies for new product introduction?",
   Option1:["Establish A Product Launch Plan.","Perform Market Research.","Identify Your Target Market.","Identify Your Competitors.","Develop A Marketing Strategy.","Plan Your Budget.","Set Measurable Goals And Benchmarks.","Perform Extensive Product Testing."],
    marks1:[2,3,2,3,0,0,0,0],
     other:false
       },
        {
          Que1:"Have you found any prticular Strategies or techniques to be especially effective when introducing this product?",
      Option1:["Yes.","No","May be","Not Sure"],
        marks1:[2,3,2,3],
      other:false
    },
     {
    Que1:"How do you address any Concerns or objections that a potential Customer Might have during the Introduction?",
     Option1:["Address Issues Head-On","Handle It Before It Happens.","Respond To The Real Issue.","Aim To Help Decision Making","Understand What's Behind The Objection.","Use A Framework."],
     marks1:[2,3,2,3,0,0],
       other:false
      },
      {
    Que1:"Can you give me an Example of a Successful product introduction you've done in the past? What made it successful?",
       Option1:["the right product","the right market","the right positioning","the right timing for success."],
    marks1:[2,3,2,3],
    other:false
      },
  {
   Que1:"Do you Customize your product introduction based on the customer's Specific needs or preferences? ",
   Option1:["Yes","No","May be","Not Sure"],
   marks1:[2,3,2,3],
   other:false
 },    

//  -------------------data Adede Below --------------------------
{
  Que1:"What to consider when launching a new product? ",
  Option1:["Define Your Target Audience","Know The Problem You're Solving", "Validate Your Product","Know Your Competition And Be Different","Make Sure It Hasn't Been Done Before"," Create A Free Trial Or Demo","Know How To Reach Your Audience" ,"Understand The Buying Journey","Lay Out A Comprehensive Strategic Planr",	"Secure Your Online Identity"],
  marks1:[2,2,2,2,1,1,0,0,0,0],
  other:false
},  	
 {
  Que1:"What do you say to attract customers?",
  Option1:["Beautiful in Its Simplicity.", "Artistically Inspired", "Enhance Your Life.", "Enhance Your Beauty.", "Looks so Good on the Outside", "It'll Make You Feel", "Good Inside." ,"Perfect From Beginning to End."],
  marks1:[2,0,2,2,2,0,0,0],
  other:false
},					
 {
  Que1:"What can you say to encourage a customer to buy?",
  Option1:["Catch Phrases That Can Encourage Customers to Buy","Guaranteed.","Limited Offer.","Best Selling."],
  marks1:[2,2,3,3],
  other:false
},

 {
  Que1:"How do you handle a product launch?",
  Option1:["Learn about your customer.","Write a positioning statement.","Pitch your positioning to stakeholders.","Plan your go-to-market strategy.","Set a goal for the launch.","Create promotional content.","Prepare your team.","Launch the product."],
  marks1:[2,2,2,2,1,1,0,0],
  other:false
},

 {
  Que1:"What to consider when launching a product?",
  Option1:["Timing.", "Price.", "Packaging.", "Your new product's name.", "Promotion.", "Know your target market.", "Know your competition.","Test your new product repeatedly."],
  marks1:[2,2,2,2,1,1,0,0],
  other:false
},

 {
  Que1:"What are the  factors to consider when buying a product?",
  Option1:["the product", "the price" ,"the promotion"	,"the sales channel."],
  marks1:[2,2,2,4],
  other:false
},	
 {
  Que1:"What do customers consider before buying a product?",
  Option1:["the characteristics of the product", "price charged", "availability of the product at the required location"],
  marks1:[3,3,4],
  other:false
},	

 {
  Que1:"What are the  factors people consider when buying a product?",
  Option1:["Psychological Factors.", "Social Factors.", "Cultural Factors.","Economic Factors.", "Personal Factors."],
  marks1:[2,2,2,2,2],
  other:false
}, 
 {
  Que1:"What are  factors that will influence you on buying a product?",
  Option1:["Product/Service Reviews.", "Peer Recommendations.", "Social Media."],
  marks1:[3,3,4],
  other:false
}, 	
 {
  Que1:"What are the different types of consumer Behaviour?",
  Option1:["complex-buying behavior", "dissonance-reducing buying behavior", "habitual buying behavior", "variety-seeking buying behavior."],
  marks1:[2,2,2,4],
  other:false
}, 	

 {
  Que1:"What are the  steps in the customer buying decision?",
  Option1:["problem recognition","information search", "alternatives evaluation", "purchase decision", "post-purchase evaluation."],
  marks1:[2,2,2,2,2],
  other:false
}, 
 {
  Que1:"How do you write an agreement between a buyer and a seller?",
  Option1:["Specify your location.", "Provide the buyer's and seller's information", "Describe the goods and services.", "State the price and deposit details (if applicable)", "Outline payment details.","Provide delivery terms."],
  marks1:[2,2,2,2,2,0],
  other:false
}, 	
 {
  Que1:"What should I say to sell my product?",
  Option1:["Focus on your ideal buyer.", "Entice with benefits." , "Avoid yeah yeah phrases." ,"Justify using superlatives.",  "Appeal to your readers' imagination." ,"Cut through the rational barriers with mini-stories."],
  marks1:[2,2,2,2,2,0],
  other:false
}, 
 {
  Que1:"How You attracts Customer?",
  Option1:["Free.", "Exclusive.", "Easy.", "Limited.", "Get.", "Guaranteed."],
  marks1:[4,2,2,2,0,0],
  other:false
}, 	
 {
  Que1:"How do you introduce the product you are selling?",
  Option1:["Define a selling point.","Gather support.","Show enthusiasm.","Train your team.","Let your team demo the product.","Schedule a launch date","Control your product's life cycle"],
  marks1:[2,2,2,2,2,0,0],
  other:false
},	
 {
  Que1:"How do you tell a product speech?",
  Option1:["Make it short.", "Make it clear.","Explain who your customers are.","Explain the problem they're facing.","Explain how your product addresses their needs"],
  marks1:[2,2,2,2,2],
  other:false
}, 

 {
  Que1:"How do you make people want your product?",
  Option1:["Drive Traffic to Your Website.","Leave Perfect First Impressions & Encourage to Discover More Content.","Build a Trust Relationship Between Your Brand and Customers.","Convey the Benefits of Your Products More Than Features.","Keep the Customers Engaged with Email Marketing."],
  marks1:[2,2,2,2,2],
  other:false
},  
 {
  Que1:"How do you justify a product?",
  Option1:["Customer need.","Competitive positioning.","The fit of the new product into the existing product range.","Potential profitability.","Speed to market.","Cost/benefit (including risk implications)."],
  marks1:[2,2,2,2,2,0],
  other:false
},  
 {
  Que1:"how you justify your product price to customers?",
  Option1:["Introduce a new version", "Cut to the chase.","Remind customers about the value they get.","Tell them about your costs.","Be humble on social media.", "Launch a low-cost version.", "Highlight social responsibility." ,"Make sure your price can be justified."],
  marks1:[2,2,2,2,2,0,0,0],
  other:false
},  
 {
  Que1:"How do you justify a price increase to a customer?",
  Option1:["Tell them why you're doing it","Highlight the value and quality","Be empathic ","Deliver the message clearly ","Call it a ‘price increase"],
  marks1:[2,2,2,2,2],
  other:false
},  
 {
  Que1:"How do you sell your product to customers?",
  Option1:["Completely understand the product","Know your market and who will buy your product.","Position the product as a solution to a problem or make something easier.","Make your customer comfortable with you as a seller.","Show first, then sell.","Don't talk down to your audience."],
  marks1:[2,2,2,2,2,0],
  other:false
},  	
 {
  Que1:"How do you handle product failure?",
  Option1:["Acknowledge 'Who' and 'Why'","Make Sure Your Goals Are Realistic.","Get Out of Your Own Head.","Accept Responsibility","Communicate Problems Early and Proactively."],
  marks1:[2,2,2,2,2],
  other:false
},  	
 {
  Que1:"How do you resolve a problem or fault with product or service?",
  Option1:["How do you resolve a problem or fault with product or service?","Formulate Solutions.","Deliver the Solution.","Follow up with Customers."],
  marks1:[2,2,2,4],
  other:false
},	
 {
  Que1:"How do you know if your product will be successful?",
  Option1:["Do a test.","Talk to potential customers.","Ask people to buy now.","Do some research.","Remain positive.","Become the customer.","Identify your market"],
  marks1:[2,2,2,2,2,0,0],
  other:false
},  
 {
  Que1:"What would be a reason you wouldn t buy a product or service?",
  Option1:["There are many reasons why customers don't buy a product or service.","In some cases, it's because they can't find what they're looking for.","In others, the price is too high.","And sometimes, the customer just doesn't trust the business enough to make a purchase"],
  marks1:[],
  other:false
},  
 {
  Que1:"How do you sell to a customer that doesn't want to buy?",
  Option1:["Be there even when you think a sale is off the table.","Donate your time.","Offer your expertise.","Give your money."],
  marks1:[3,3,2,2],
  other:false
},  
 {
  Que1:"How customer  deciding whether or not to buy a certain product?",
  Option1:["Want money or item?","Can you wait?","Will you use it in the long term? ","Have you invested first? ","Are you buying the item for social media?","Is it an emotional buy?	"],
  marks1:[],
  other:false
},  
 {
  Que1:"How do you justify your product?",
  Option1:["Introduce a new version.","Cut to the chase.","Remind customers about the value they get.","Tell them about your costs.","Be humble on social media.","Launch a low-cost version","Highlight social responsibility.","Highlight social responsibility."],
  marks1:[2,2,3,3,0,0,0,0],
  other:false
},  	
 {
  Que1:"How do you justify an argument?",
  Option1:["Provide Support.", "Establish Reasons.", "Discuss Budgetary Issues."],
  marks1:[3,3,4],
  other:false
}, 
 {
  Que1:"Which are key elements of justification?",
  Option1:["importance", "necessity" ,"convenience", "benefits"],
  marks1:[2,2,3,3,],
  other:false
},  
 {
  Que1:"How do you justify a price to a customer?",
  Option1:["Review your pricing strategy.","Point out your added value.","Find your customer's 'pain points'","Differentiate yourself from online competitors.","Stand your ground."],
  marks1:[2,2,2,2,2],
  other:false
},  	
 {
  Que1:"How do you answer a customer about a high price?",
  Option1:["Find out why the prospect thinks it's too expensive.","Ask what it would cost the prospect to do nothing.","Temporarily set the price aside.","Ask what a fair price would be.","Compare price to ROI."],
  marks1:[2,2,2,2,2],
  other:false
},  
 {
  Que1:"How to respond to a customer's price negotiation request?",
  Option1:["Share the lowest terms you can offer and add variables.", "Examine why they want to negotiate and actively listen.", "Focus on the simplest issue first.", "Trade discounts for concessions.", "Convince them of the value of your product.", "Negotiate as long as possible"],
  marks1:[2,2,2,2,2],
  other:false
},  
 {
  Que1:"How do you encourage customers to buy more?",
  Option1:["Make your first contact count.","Give your customers your undivided attention.","Don't ask customers to buy without seeing the menu.","Find out what your customers need, rather than telling them what you want them to buy.","Don't ever stop selling."],
  marks1:[2,2,2,2,2],
  other:false
}, 	

 {
  Que1:"How do you impress customers ?",
  Option1:["Respond to Inquiries Quickly.","Prove that You Care About Them", "Perks for Loyal Customers.","Understand What They Need.","Provide Genuine Help.", "Follow Up.", "Do Great Work."],
  marks1:[2,2,2,2,2,0,0],
  other:false
},  
 {
  Que1:"How do you convince customers to accept price increase?",
  Option1:["show certainty in your decision and keep pushing on.","explain how the price increase will be valuable for the customers.","keep it brief.","open a genuine, personal, one-on-one conversation and give users a way to contact you.","consider offering a special deal for a pre-increase revenue boost."],
  marks1:[2,2,2,2,2],
  other:false
},  	
 {
  Que1:"How do you change customer behavior?",
  Option1:["Reinforce positive new beliefs.","Shape emerging habits with new offerings.","Sustain new habits, using contextual cues.","Align messages to consumer mindsets.","Analyze consumer beliefs and behaviors at a granular level."],
  marks1:[2,2,2,2,2],
  other:false
},  
 {
  Que1:"How do you become a strong sales person?",
  Option1:["Confidence.","Ability and willingness to listen.","The ability to maintain focus.","Strong communication skills.","Creativity.","A hunger to learn.","Persistence.	"],
  marks1:[2,2,2,2,2,0,0],
  other:false
},  
 {
  Que1:"How do you move prospects through the sales cycle?",
  Option1:["Determine what stage they're at.","Help them understand their problem.","Ensure that your solution addresses the prospect's problem.","Keep asking questions.","Create a personalized experience for each prospect.","Communicate regularly with prospect at every stage."],
  marks1:[2,2,2,2,2,0],
  other:false
},  	
 {
  Que1:"Which are the reasons for decline stage in product life cycle?",
  Option1:["technological advances", "trends", "innovation or changing consumer tastes."],
  marks1:[3,3,4],
  other:false
},  	
 {
  Que1:"Which are the reasons for customer to turn to our competitors?",
  Option1:["Poor online presence.","Poor products quality.","Poor customer service.","Poor restaurant reputation.","Poor pricing.","Poor Operations."],
  marks1:[2,2,2,2,2,0],
  other:false
},  
 {
  Que1:"Why should a customer buy from you instead of your competitor?",
  Option1:["Perhaps you offer higher quality","a lower price","a superior set of features","completely unique offering."],
  marks1:[2,2,3,3],
  other:false
},  
 {
  Que1:"Which is the main reason for competition in business?",
  Option1:["lower prices", "higher quality goods and services", "greater variety", "more innovation."],
  marks1:[2,2,3,3],
  other:false
},  


    
  ]
  Que1:string=""
  Option1:string=""
    isChecked:boolean=false;
    val: any;
    clicked:boolean=false;
    values: any[]=[];
    public sum:number=0;
    clickedCheckbox: any;
  engageValue: number=0;
  check: any;
  introductionDetails:any={};
 
     constructor(private router:Router) { }
   
     ngOnInit(): void {
     }
    onchange(event:any,i:any)
    {
      if(event.target.checked)
      {
        this.data1[i].other=true
        console.log(event.target.value);
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
      //this.saveDetails={...this.saveDetails,que:[...que]}
      if(!this.introductionDetails.hasOwnProperty(que)){
        this.introductionDetails[que]=[]
      }
      for(let ele in this.introductionDetails){
        if(ele === que){
          const index=[...this.introductionDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.introductionDetails[ele].splice(index,1)
          }else{
            this.introductionDetails[ele]=[...this.introductionDetails[ele],data]
          }
        }
      }
      
      
    }
    saveData(event:any) { 
      this.engageValue=this.sum
      console.log(this.engageValue);
      localStorage.setItem("Introduction", JSON.stringify(this.engageValue))
      this.check=event.isTrusted
      console.log(this.check);
      if(this.check==true){
        alert("Introduction Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/open-purpose-engage-with-concept')
    console.log(this.data1);
   }
 
   
 
}
