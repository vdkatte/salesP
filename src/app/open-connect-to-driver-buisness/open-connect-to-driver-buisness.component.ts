import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-open-connect-to-driver-buisness',
  templateUrl: './open-connect-to-driver-buisness.component.html',
  styleUrls: ['./open-connect-to-driver-buisness.component.css']
})
export class OpenConnectToDriverBuisnessComponent implements OnInit 
{
  data1=[
    {
    Que1:"Which driver are used for buisness?",
    Option1:["Cash","Profit","Assetes","Growth","People"],
    marks1:[3,1,3,2,1],
    other:false
    },
    {
    Que1:"which key drivers are used for growth in business?",
    Option1:["Customer","People","Transactions","Risk","Technology","Operations"],
    marks1:[2,1,3,0,1,2,1],
    other:false
    },
    {
    Que1:"Which key technologies are you used to found in businesses?",
    Option1:["Cloud services","Enterprise resource planning software","Customer relationship management platforms","Data lakes","HR management tools"],
    marks1:[3,2,1,3,1],
    other:false
    },
    {
      Que1:"What are key growth indicators?",
      Option1:["Sales growth","cost of production","gross profit growth rate","customer retention rate","operational performance and productivity","assets efficiency rate, etc."],
      marks1:[3,2,1,4,0,0],
      other:false
      },
      {
      Que1:"What tools do salespeople use?",
      Option1:["CRM software.","Sales intelligence.","Sales acceleration.","Data connectors and integrations tools.","Sales analytics.","Sales productivity.","e-signature and document tracking.","Marketing automation and ABM."],
      marks1:[3,2,1,4,0,0,0,0],
      other:false
      },
      {
      Que1:"What types of technology do you use to improve your selling and showing process?",
      Option1:["Manage relationships with a CRM.","Save time with smarter email outreach.","Use online apps to build your community.","Stay up-to-date with Google Alerts.","Always be learning with audiobooks."],
      marks1:[3,2,1,4,0],
      other:false
      },
      {
      Que1:"How can you be a good tech salesperson?",
      Option1:["Tech salespeople must constantly strive to better understand the tech landscape around the products they are trying to sell.","They should regularly update their knowledge about the latest trends and solutions.","develop a clear understanding of the wider competitive landscape."],
      marks1:[3,2,5],
      other:false
      },
      {
      Que1:"How to use technology to improve your customer service",
      Option1:["Start with a cloud-based customer service software.","Adopt an omnichannel customer engagement strategy.","Offer a range of self-service options.","Empower your staff with knowledge management and artificial intelligence."],
      marks1:[3,2,5,0],
      other:false
       },
      {
      Que1:"What technologies can improve customer experience?",
      Option1:["The cloud, and the tools backed by this technology, is common at business organizations today—and for good reason.","Chatbots.","Virtual & Augmented Reality.","Voice Capabilities.","Smartphones."],
      marks1:[3,2,5,0,0],
      other:false
       },
       {
        Que1:"What technological tools are used in businesses?",
        Option1:["Project Management Tools.","E-Signature Tools.","Email Marketing.","Customer Relationship Management (CRM) .","HR Management.","Accounting Software.","Communication and Collaboration. ","Password Management Tools."],
        marks1:[3,2,5,0,0,0,0,0],
        other:false
         },

        //  addd new question here
        
  {
    Que1:"Which of the following is an effective way to justify your product to a customer?",
    Option1:["Ignoring the customer's concerns","Offering a discount","Comparing your product to a lower-priced competitor","Highlighting the unique features and benefits of your product"],
    marks1:[0,0,0,10],
    other:false
  },
   {
    Que1:"What is the most important factor in justifying your product to a customer?",
    Option1:["Offering a discount","Using guilt tactics","Explaining the benefits of your product","Ignoring the customer's concerns"],
    marks1:[0,0,10,0],
    other:false
  },
 
   {
    Que1:"How can you justify the price of your product to a customer?",
    Option1:["By using fear tactics","By offering a discount","By explaining the value of your product","By ignoring the customer's concerns about the price"],
    marks1:[0,0,10,0],
    other:false
  },
   {
    Que1:"What is the key to justifying your product to a customer?",
    Option1:["Ignoring the customer's concerns","Comparing your product to a lower-priced competitor","Highlighting the unique features and benefits of your product","Using guilt tactics"],
    marks1:[0,0,10,0],
    other:false
  },  
   {
    Que1:"How can you justify the quality of your product to a customer?",
    Option1:["By offering a discount","By ignoring the customer's concerns","By comparing your product to a lower-priced competitor","By explaining the features and benefits of your product"],
    marks1:[0,0,0,10],
    other:false
  },
   {
    Que1:"Which of the following is an effective way to justify your product to a customer who is price-sensitive?",
    Option1:["Offering a discount","Using guilt tactics","Ignoring the customer's concerns","Comparing your product to a higher-priced competitor"],
    marks1:[],
    other:false
  },   
   {
    Que1:"How can you justify the value of your product to a customer who is concerned about cost?",
    Option1:["By using fear tactics","By offering a discount","By comparing your product to a lower-priced competitor"," By ignoring the customer's concerns"],
    marks1:[0,0,10,0],
    other:false
  },
   {
    Que1:"What is the most effective way to justify your product to a customer who is focused on the bottom line?",
    Option1:["By using guilt tactics","By offering a discount","By explaining the value of your product","By ignoring the customer's concerns"],
    marks1:[0,10,0,0],
    other:false
  },  
   {
    Que1:"How can you justify the features of your product to a customer?",
    Option1:["By using fear tactics","By offering a discount","By ignoring the customer's concerns about the price","By explaining the benefits of your product"],
    marks1:[],
    other:false
  },  
   {
    Que1:"Which of the following is an effective way to justify your product to a customer who is concerned about quality?",
    Option1:["Ignoring the customer's concerns","Comparing your product to a lower-priced competitor","Using guilt tactics","Explaining the unique features and benefits of your product"],
    marks1:[0,0,0,10],
    other:false
  },
   {
    Que1:"What is the best way to justify an argument?",
    Option1:["By using logical reasoning","By using emotional appeal","By using aggressive tactics","By ignoring the other person's perspective"],
    marks1:[10,0,0,0],
    other:false
  },
   {
    Que1:"How can you justify your argument to someone who disagrees with you?",
    Option1:["By using fear tactics","By using aggressive tactics","By listening to their perspective and presenting counterarguments","By ignoring their perspective"],
    marks1:[0,0,10,0],
    other:false
  }, 
   {
    Que1:"What is the key to justifying your argument effectively?",
    Option1:["Using emotional appeal","Ignoring the other person's perspective","Using logical reasoning and evidence","Using aggressive tactics"],
    marks1:[0,0,10,0],
    other:false
  }, 
   {
    Que1:"How can you justify your argument to someone who is skeptical?",
    Option1:["By using emotional appeal","By using aggressive tactics","By providing evidence and logical reasoning","By ignoring their skepticism"],
    marks1:[0,0,10,0],
    other:false
  },
   {
    Que1:"What is the best way to justify an argument in a professional setting?",
    Option1:["By using emotional appeal","By using logical reasoning and evidence", "By using aggressive tactics","By ignoring the other person's perspective"],
    marks1:[0,10,0,0],
    other:false
  }, 
   {
    Que1:"How can you justify your argument to someone who is emotional?",
    Option1:["By using aggressive tactics","By using emotional appeal","By ignoring their emotions","By using logical reasoning and empathy"],
    marks1:[0,0,0,10],
    other:false
  },
   {
    Que1:"What is the most important element in justifying your argument?",
    Option1:["Using emotional appeal", "Using logical reasoning and evidence","Ignoring the other person's perspective","Using aggressive tactics"],
    marks1:[0,10,0,0],
    other:false
  },
   {
    Que1:"How can you justify your argument to someone who has a different background or culture?",
    Option1:["By using emotional appeal","By using aggressive tactics","By listening to their perspective and explaining your own","By ignoring their perspective"],
    marks1:[0,0,,10,0],
    other:false
  },
   {
    Que1:"What is the most effective way to justify your argument to a group of people?",
    Option1:[" By using aggressive tactics"," By using emotional appeal","By using logical reasoning and evidence","By ignoring their perspective"],
    marks1:[0,0,,10,0],
    other:false
  },
   {
    Que1:"How can you justify your argument to someone who is in a position of power?",
    Option1:["By using aggressive tactics","By using emotional appeal","By providing evidence and logical reasoning","By ignoring their perspective"],
    marks1:[0,0,10,0],
    other:false
  }, 
   {
    Que1:"Which of the following is an effective way to justify your argument to someone who has a strong opinion?",
    Option1:["By ignoring their opinion","By using emotional appeal","By using logical reasoning and evidence","By using aggressive tactics"],
    marks1:[0,0,10,0],
    other:false
  },  
   {
    Que1:"Which of the following is NOT a recommended approach to sell to a customer who doesn't want to buy?",
    Option1:["Push them into making a purchase","Understand their objections and address them","Offer incentives to encourage them to buy","Build rapport and trust with the customer"],
    marks1:[10,0,0,0],
    other:false
  }, 
   {
    Que1:"What is the best way to start a conversation with a customer who doesn't want to buy?",
    Option1:["Ask them why they're not interested in buying","Tell them about the benefits of the product","Offer them a discount to encourage them to buy","Ask them about their needs and interests"],
    marks1:[0,0,0,10],
    other:false
  },
   {
    Que1:"Which of the following is NOT a good way to address a customer's objections?",
    Option1:["Ignore their objections and focus on the positive features of the product","Acknowledge their concerns and offer solutions","Provide social proof by sharing customer reviews and testimonials","Offer a money-back guarantee to ease their concerns"],
    marks1:[10,0,0,0],
    other:false
  },
   {
    Que1:"What is the importance of building rapport and trust with a customer who doesn't want to buy?",
    Option1:["It helps the customer feel more comfortable and open to the sales pitch", "It can create a long-term relationship with the customer", "It can increase the likelihood of the customer making a future purchase"],
    marks1:[10,0,0],
    other:false
  }, 
   {
    Que1:"Which of the following is a good way to offer incentives to a customer who doesn't want to buy?",
    Option1:["Offer a discount for a limited time only","Provide a free trial or sample of the product","Offer a referral program or loyalty program"],
    marks1:[10,0,0],
    other:false
  },
   {
    Que1:"Why is it important to listen carefully to a customer who doesn't want to buy?",
    Option1:["It can help you understand their objections and address them effectively","It can help you build rapport and trust with the customer","It can help you identify their needs and interests"],
    marks1:[10,0,0],
    other:false
  },      
   {
    Que1:"Which of the following is NOT a good way to handle a customer who doesn't want to buy?",
    Option1:["Get defensive and argumentative with the customer","Stay calm and professional","Offer alternative products or services that may better fit their needs"," Ask for feedback on how you can improve your sales pitch"],
    marks1:[10,0,0,0],
    other:false
  }, 
   {
    Que1:"What is the importance of being knowledgeable about the product when selling to a customer who doesn't want to buy?",
    Option1:["It helps you answer any questions or concerns the customer may have","It helps you build credibility with the customer","It helps you highlight the unique features and benefits of the product"],
    marks1:[10,0,0],
    other:false
  },  
   {
    Que1:"Which of the following is a good way to create urgency with a customer who doesn't want to buy?",
    Option1:["Offer a discount that expires soon","Show the customer how the product can solve their problem immediately","Emphasize the limited availability of the product"],
    marks1:[10,0,0],
    other:false
  },  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
  ]
    isChecked:boolean=false;
    val: any;
    clicked:boolean=false;
    values: any[]=[];
    sum:number=0;
    clickedCheckbox: any;
  engageValue: number=0;
  check: any;
  buisnessDetails:any={};
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
      if(!this.buisnessDetails.hasOwnProperty(que)){
        this.buisnessDetails[que]=[]
      }
      for(let ele in this.buisnessDetails){
        if(ele ===que){
          const index=[...this.buisnessDetails[ele]].findIndex((e:any)=>e===data)
          if(index >=0){
            this.buisnessDetails[ele].splice(index,1)
          }else{
            this.buisnessDetails[ele]=[...this.buisnessDetails[ele],data]
          }
        }
      }
     
    }
    saveData(event:any) { 
      this.engageValue=this.sum
      console.log(this.buisnessDetails);
      localStorage.setItem("Buisness", JSON.stringify(this.engageValue))
      this.check=event.isTrusted
      if(this.check==true){
        alert("Buisness Data saved succesfully !!")
      }
   }
   next(){
    this.router.navigateByUrl('/open-connect-to-drivers-personal')
   }
   Previous(){
    this.router.navigateByUrl('/open-agree-to-consider')
   }
}