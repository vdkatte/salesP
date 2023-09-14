import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from 'src/app/service/admin-service.service';
import { __param } from 'tslib';
@Component({
  selector: 'app-question-tabs',
  templateUrl: './question-tabs.component.html',
  styleUrls: ['./question-tabs.component.css'],
})
export class QuestionTabsComponent implements OnInit {
  tabArray: string[] = [];
  questionArray: any[] = [];
  selectedIndex: number = 0;
  answerArray: any[] = [];
  user: any;
  endhour: any;
  endMinute: any;
  endSecond: any;
  startHour: any;
  startMinute: any;
  startSecond: any;
  constructor(
    private router: ActivatedRoute,
    private adminService: AdminServiceService,
    private route: Router
  ) {}

  ngOnInit() {
    this.router.queryParams.subscribe((params: any) => {
      console.log(params);
      this.createTabArray(params.component);
    });
  }
  createTabArray(componentName: any) {
    switch (componentName) {
      case 'purpose':
        let purposeArray = ['Introduction', 'Engage With Concept'];
        this.tabArray = purposeArray;
        break;
      case 'connect to driver':
        let connectToDriverArray = ['Buisness', 'Personal'];
        this.tabArray = connectToDriverArray;
        break;
      case 'Agree to Consider':
        let agreeToConsiderArray = ['Agree To Consider'];
        this.tabArray = agreeToConsiderArray;
        break;
      case 'Requirement':
        let requirementArray = ['Framework', 'Specifics', 'Importance'];
        this.tabArray = requirementArray;
        break;
      case 'Gap Analysis':
        let gapAnalysisArray = ['Ideal v current', 'Clarity'];
        this.tabArray = gapAnalysisArray;
        break;
      case 'Significance':
        let significanceArray = ['Loss & Gains', 'Reconnect to driver'];
        this.tabArray = significanceArray;
        break;
      case 'Solution':
        let solutionArray = ['Overview', 'Critical issue'];
        this.tabArray = solutionArray;
        break;
      case 'Differentiate':
        let differentiateArray = ['Common standards', 'Why You', 'Evidence'];
        this.tabArray = differentiateArray;
        break;
      case 'Reconnect to Driver':
        let reconnectTodriversArray = ['Impact', 'Example'];
        this.tabArray = reconnectTodriversArray;
        break;
      case 'Concerns':
        let concernsArray = ['Anticipate', 'Specifies'];
        this.tabArray = concernsArray;
        break;
      case 'Negotiation':
        let negotiationArray = ['Agreement', 'Alternatives'];
        this.tabArray = negotiationArray;
        break;
      case 'Commit':
        let commitArray = ['Summarise', 'Next Step'];
        this.tabArray = commitArray;
        break;
      case 'Reason to Move':
        let reasonToMoveArray = ['Justify'];
        this.tabArray = reasonToMoveArray;
        break;

      case 'Decision to Move':
        let decisionToMoveArray = ['Uncertain'];
        this.tabArray = decisionToMoveArray;
        break;
      case 'Consider Options':
        let considerOptionsArray = ['Compare'];
        this.tabArray = considerOptionsArray;
        break;
      case 'Commits':
        let comitArray = ['Anxieties'];
        this.tabArray = comitArray;
        break;
      case 'Trap1':
        let trap1Array = ['Defend'];
        this.tabArray = trap1Array;
        break;
      case 'Trap2':
        let trap2Array = ['Attention Elsewhere'];
        this.tabArray = trap2Array;
        break;
    }
    this.getQuestion(this.tabArray[0]);
  }
  selectedTab(event: any) {
    this.selectedIndex = event.index;
    this.getQuestion(event.tab.textLabel);
  }
  getQuestion(category: any) {
    this.adminService.getQuestion(category).subscribe((res) => {
      console.log(res);
      let arr: any = res;
      this.questionArray = arr;
    });
  }
  onSave() {
    if (this.answerArray.length) {
      this.adminService.postAnswer(this.answerArray).subscribe((res) => {
        console.log(res);
        this.answerArray = [];
      });
    }
    // alert('Saved Succesfully');
    this.selectedIndex++;
    if (this.selectedIndex > this.tabArray.length - 1) {
      switch (this.tabArray[this.tabArray.length - 1]) {
        case 'Engage With Concept':
          this.createTabArray('connect to driver');
          this.selectedIndex = 0;
          break;
        case 'Personal':
          this.createTabArray('Agree to Consider');
          this.selectedIndex = 0;
          break;
        case 'Agree To Consider':
          this.createTabArray('Reason to Move');
          this.selectedIndex = 0;
          break;
        case 'Justify':
          this.createTabArray('Trap1');
          this.selectedIndex = 0;
          break;
        case 'Defend':
          this.createTabArray('Requirement');
          this.selectedIndex = 0;
          break;
        case 'Importance':
          this.createTabArray('Gap Analysis');
          this.selectedIndex = 0;
          break;
        case 'Clarity':
          this.createTabArray('Significance');
          this.selectedIndex = 0;
          break;
        case 'Reconnect to driver':
          this.createTabArray('Decision to Move');
          this.selectedIndex = 0;
          break;
        case 'Uncertain':
          this.createTabArray('Solution');
          this.selectedIndex = 0;
          break;
        case 'Critical issue':
          this.createTabArray('Differentiate');
          this.selectedIndex = 0;
          break;
        case 'Evidence':
          this.createTabArray('Reconnect to Driver');
          this.selectedIndex = 0;
          break;
        case 'Example':
          this.createTabArray('Consider Options');
          this.selectedIndex = 0;
          break;
        case 'Compare':
          this.createTabArray('Trap2');
          this.selectedIndex = 0;
          break;
        case 'Attention Elsewhere':
          this.createTabArray('Concerns');
          this.selectedIndex = 0;
          break;
        case 'Specifies':
          this.createTabArray('Negotiation');
          this.selectedIndex = 0;
          break;
        case 'Alternatives':
          this.createTabArray('Commit');
          this.selectedIndex = 0;
          break;
        case 'Next Step':
          this.createTabArray('Commits');
          this.selectedIndex = 0;
          break;
        case 'Anxieties':
          this.route.navigateByUrl('user-dashboard');
          this.selectedIndex = 0;
          break;
      }
    }
    console.log(this.selectedIndex);
  }
  onClick(opt: any, question: any) {
    let index = this.answerArray.findIndex((ele) => ele._id === question._id);
    if (index == -1) {
      this.answerArray.push({
        _id: question._id,
        question: question.question,
        option: opt.option,
        mark: opt.mark,
        user: localStorage.getItem('userId'),
        category: question.category,
      });
    } else {
      this.answerArray[index].option = opt.option;
      this.answerArray[index].mark = opt.amrk;
    }
    console.log(this.answerArray);
    console.log(this.user);
  }
}
