import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { InteractionService } from '../interaction.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allsectionsumValue: number=0;
  engagewithConceptValue: string='';
  introductionValue: string='';
  agreeToConsiderValue: string='';
  buisnessValue: string='';
  personalValue:string='';
  frameworkValue:string='';
  specifiesValue:string='';
  importanceValue:string='';
  idealVcurrentValue:string='';
  clarityValue:string='';
  lossNgainsValue:string='';
  reconnecttodriverValue:string='';
  overviewValue:string='';
  criticalIssueValue:string='';
  commanStandardsValue:string='';
  WhyYouValue:string='';
  evienceValue:string='';
  impactValue:string='';
  reconnecttodriverexampleValue:string='';
  anticipateValue:string='';
  closeSpecifiesValue:string='';
  agreementValue:string='';
  alternativesValue:string='';
  summariseValue:string='';
  nextStepValue:string='';
  reasonToMoveJustifyValue:string='';
  decisionToMoveUncertainValue:string='';
  considerOptioncompareValue:string='';
  commitAnxietiesValue:string='';
  trap1Value:string='';
  trap2Value:string='';
  total: any='';
  pmRole: string="";
  val: string ="";
  
  constructor(private _interactionService:InteractionService,router:Router) {
  }
  ngOnInit(): void {
    this._interactionService.navigationPath$.subscribe((access)=>this.pmRole=access)
    this.val=JSON.parse(localStorage.getItem('val')||'{}');
    
  }
  getdata(){
    this.introductionValue= JSON.parse(localStorage.getItem('Open')||'{}');
    this.engagewithConceptValue= JSON.parse(localStorage.getItem('Develop Need')||'{}');
    this.agreeToConsiderValue= JSON.parse(localStorage.getItem('Present Solution')||'{}');
    this.buisnessValue= JSON.parse(localStorage.getItem('Close')||'{}');
    this.personalValue= JSON.parse(localStorage.getItem('Reason To Move')||'{}'); 

    this.frameworkValue= JSON.parse(localStorage.getItem('Decision To Move')||'{}'); 
    this.specifiesValue= JSON.parse(localStorage.getItem('Consider Option')||'{}'); 
    this.importanceValue= JSON.parse(localStorage.getItem('Commit')||'{}'); 
    this.idealVcurrentValue= JSON.parse(localStorage.getItem('Trap-I')||'{}'); 
    this.clarityValue= JSON.parse(localStorage.getItem('Trap-II')||'{}'); 
    alert(" You have Saved Your Data Successfully ")
  }
  submit(){
    this.total=  parseInt(this.introductionValue) + parseInt(this.engagewithConceptValue) +  parseInt(this.agreeToConsiderValue) +  parseInt(this.buisnessValue) +  parseInt(this.personalValue) + parseInt(this.frameworkValue) + parseInt(this.specifiesValue) + parseInt(this.importanceValue) + parseInt(this.idealVcurrentValue) + parseInt(this.clarityValue)
    let mark=(this.total*100)/1000
    if(mark<35){
    alert("You have Failed Test with Percentage : "+mark)
    } else if(mark>35 && mark<=100){
    alert("Congresstulation You Have Pass The Test with Percentage : "+mark)
    }
    else{
      alert("Please Save The Data First and Then Submit")
    }

  }
}
