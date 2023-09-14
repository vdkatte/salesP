import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { SideHeaderBarComponent } from './side-header-bar/side-header-bar.component';
import { OpenDashboardComponent } from './open-dashboard/open-dashboard.component';
import { OpenPurposeComponent } from './open-purpose/open-purpose.component';
import { OpenPurposeIntroductionComponent } from './open-purpose-introduction/open-purpose-introduction.component';
import { OpenPurposeEngageWithConceptComponent } from './open-purpose-engage-with-concept/open-purpose-engage-with-concept.component';
import { OpenAgreeToConsiderComponent } from './open-agree-to-consider/open-agree-to-consider.component';
import { OpenConnectToDriversPersonalComponent } from './open-connect-to-drivers-personal/open-connect-to-drivers-personal.component';
import { OpenConnectToDriverComponent } from './open-connect-to-driver/open-connect-to-driver.component';
import { DevelopNeedDashboardComponent } from './develop-need-dashboard/develop-need-dashboard.component';
import { DevelopNeedRequirementComponent } from './develop-need-requirement/develop-need-requirement.component';
import { DevelopNeedRequirementFrameworkComponent } from './develop-need-requirement-framework/develop-need-requirement-framework.component';
import { DevelopNeedRequirementSpecifiesComponent } from './develop-need-requirement-specifies/develop-need-requirement-specifies.component';
import { DevelopNeedRequirementImportanceComponent } from './develop-need-requirement-importance/develop-need-requirement-importance.component';
import { DevelopNeedGapAnalysisComponent } from './develop-need-gap-analysis/develop-need-gap-analysis.component';
import { DevelopNeedGapAnalysisIdealVCurrentComponent } from './develop-need-gap-analysis-ideal-v-current/develop-need-gap-analysis-ideal-v-current.component';
import { DevelopNeedGapAnalysisClarityComponent } from './develop-need-gap-analysis-clarity/develop-need-gap-analysis-clarity.component';
import { DevelopNeedSignificanceComponent } from './develop-need-significance/develop-need-significance.component';
import { DevelopNeedSignificanceLossNGainsComponent } from './develop-need-significance-loss-n-gains/develop-need-significance-loss-n-gains.component';
import { DevelopNeedSignificanceReconnectToDriverComponent } from './develop-need-significance-reconnect-to-driver/develop-need-significance-reconnect-to-driver.component';
import { PresentSolutionDashboardComponent } from './present-solution-dashboard/present-solution-dashboard.component';
import { PresentSolutionSolutionComponent } from './present-solution-solution/present-solution-solution.component';
import { PresentSolutionSolutionOverviewComponent } from './present-solution-solution-overview/present-solution-solution-overview.component';
import { PresentSolutionSolutionCriticalIssueComponent } from './present-solution-solution-critical-issue/present-solution-solution-critical-issue.component';
import { PresentSolutionDifferntiateComponent } from './present-solution-differntiate/present-solution-differntiate.component';
import { PresentSolutionDifferntiateCommanStandardsComponent } from './present-solution-differntiate-comman-standards/present-solution-differntiate-comman-standards.component';
import { PresentSolutionDifferntiateWhyYouComponent } from './present-solution-differntiate-why-you/present-solution-differntiate-why-you.component';
import { PresentSolutionDifferntiateEvidenceComponent } from './present-solution-differntiate-evidence/present-solution-differntiate-evidence.component';
import { OpenConnectToDriverBuisnessComponent } from './open-connect-to-driver-buisness/open-connect-to-driver-buisness.component';
import { PresentSolutionReconnectDriverComponent } from './present-solution-reconnect-driver/present-solution-reconnect-driver.component';
import { PresentSolutionReconnectDriverImpactComponent } from './present-solution-reconnect-driver-impact/present-solution-reconnect-driver-impact.component';
import { PresentSolutionReconnectDriverExampleComponent } from './present-solution-reconnect-driver-example/present-solution-reconnect-driver-example.component';
import { CloseDashboardComponent } from './close-dashboard/close-dashboard.component';
import { CloseConcernsComponent } from './close-concerns/close-concerns.component';
import { CloseConcernsAnticipateComponent } from './close-concerns-anticipate/close-concerns-anticipate.component';
import { CloseConcernsSpecifiesComponent } from './close-concerns-specifies/close-concerns-specifies.component';
import { CloseNegotiationComponent } from './close-negotiation/close-negotiation.component';
import { CloseNegotiationAgreementComponent } from './close-negotiation-agreement/close-negotiation-agreement.component';
import { CloseNegotiationAlternativesComponent } from './close-negotiation-alternatives/close-negotiation-alternatives.component';
import { CloseCommitComponent } from './close-commit/close-commit.component';
import { CloseCommitSummariseComponent } from './close-commit-summarise/close-commit-summarise.component';
import { CloseCommitNextStepComponent } from './close-commit-next-step/close-commit-next-step.component';
import { ReasonToMoveJustifyComponent } from './reason-to-move-justify/reason-to-move-justify.component';
import { DecisionToMoveUncertainComponent } from './decision-to-move-uncertain/decision-to-move-uncertain.component';
import { ConsiderOptionsCompareComponent } from './consider-options-compare/consider-options-compare.component';
import { CommitAnxietiesComponent } from './commit-anxieties/commit-anxieties.component';
import { Trap1Component } from './trap1/trap1.component';
import { Trap2Component } from './trap2/trap2.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Stage1Component } from './dashboard/stage1/stage1.component';
import { Stage2Component } from './dashboard/stage2/stage2.component';
import { Stage3Component } from './dashboard/stage3/stage3.component';
import { Stage4Component } from './dashboard/stage4/stage4.component';
import { LoginComponent } from './login/login.component';
import { LivechatComponent } from './livechat/livechat.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { SuccessfullComponent } from './successfull/successfull.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SideBarComponent,
    HeaderComponent,
    SideHeaderBarComponent,
    OpenDashboardComponent,
    OpenPurposeComponent,
    OpenPurposeIntroductionComponent,
    OpenPurposeEngageWithConceptComponent,
    OpenAgreeToConsiderComponent,
    OpenConnectToDriversPersonalComponent,
    OpenConnectToDriverComponent,
    DevelopNeedDashboardComponent,
    DevelopNeedRequirementComponent,
    DevelopNeedRequirementFrameworkComponent,
    DevelopNeedRequirementSpecifiesComponent,
    DevelopNeedRequirementImportanceComponent,
    DevelopNeedGapAnalysisComponent,
    DevelopNeedGapAnalysisIdealVCurrentComponent,
    DevelopNeedGapAnalysisClarityComponent,
    DevelopNeedSignificanceComponent,
    DevelopNeedSignificanceLossNGainsComponent,
    DevelopNeedSignificanceReconnectToDriverComponent,
    PresentSolutionDashboardComponent,
    PresentSolutionSolutionComponent,
    PresentSolutionSolutionOverviewComponent,
    PresentSolutionSolutionCriticalIssueComponent,
    PresentSolutionDifferntiateComponent,
    PresentSolutionDifferntiateCommanStandardsComponent,
    PresentSolutionDifferntiateWhyYouComponent,
    PresentSolutionDifferntiateEvidenceComponent,
    OpenConnectToDriverBuisnessComponent,
    PresentSolutionReconnectDriverComponent,
    PresentSolutionReconnectDriverImpactComponent,
    PresentSolutionReconnectDriverExampleComponent,
    CloseDashboardComponent,
    CloseConcernsComponent,
    CloseConcernsAnticipateComponent,
    CloseConcernsSpecifiesComponent,
    CloseNegotiationComponent,
    CloseNegotiationAgreementComponent,
    CloseNegotiationAlternativesComponent,
    CloseCommitComponent,
    CloseCommitSummariseComponent,
    CloseCommitNextStepComponent,
    ReasonToMoveJustifyComponent,
    DecisionToMoveUncertainComponent,
    ConsiderOptionsCompareComponent,
    CommitAnxietiesComponent,
    Trap1Component,
    Trap2Component,
    Stage1Component,
    Stage2Component,
    Stage3Component,
    Stage4Component,
    LoginComponent,
    LivechatComponent,
    AddquestionComponent,
    SuccessfullComponent,
    
   

    
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
   
  ],
 
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
