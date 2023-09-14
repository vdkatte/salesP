import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CloseCommitNextStepComponent } from './close-commit-next-step/close-commit-next-step.component';
import { CloseCommitSummariseComponent } from './close-commit-summarise/close-commit-summarise.component';
import { CloseCommitComponent } from './close-commit/close-commit.component';
import { CloseConcernsAnticipateComponent } from './close-concerns-anticipate/close-concerns-anticipate.component';
import { CloseConcernsSpecifiesComponent } from './close-concerns-specifies/close-concerns-specifies.component';
import { CloseConcernsComponent } from './close-concerns/close-concerns.component';
import { CloseDashboardComponent } from './close-dashboard/close-dashboard.component';
import { CloseNegotiationAgreementComponent } from './close-negotiation-agreement/close-negotiation-agreement.component';
import { CloseNegotiationAlternativesComponent } from './close-negotiation-alternatives/close-negotiation-alternatives.component';
import { CloseNegotiationComponent } from './close-negotiation/close-negotiation.component';
import { CommitAnxietiesComponent } from './commit-anxieties/commit-anxieties.component';
import { ConsiderOptionsCompareComponent } from './consider-options-compare/consider-options-compare.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DecisionToMoveUncertainComponent } from './decision-to-move-uncertain/decision-to-move-uncertain.component';
import { DevelopNeedDashboardComponent } from './develop-need-dashboard/develop-need-dashboard.component';
import { DevelopNeedGapAnalysisClarityComponent } from './develop-need-gap-analysis-clarity/develop-need-gap-analysis-clarity.component';
import { DevelopNeedGapAnalysisIdealVCurrentComponent } from './develop-need-gap-analysis-ideal-v-current/develop-need-gap-analysis-ideal-v-current.component';
import { DevelopNeedGapAnalysisComponent } from './develop-need-gap-analysis/develop-need-gap-analysis.component';
import { DevelopNeedRequirementFrameworkComponent } from './develop-need-requirement-framework/develop-need-requirement-framework.component';
import { DevelopNeedRequirementImportanceComponent } from './develop-need-requirement-importance/develop-need-requirement-importance.component';
import { DevelopNeedRequirementSpecifiesComponent } from './develop-need-requirement-specifies/develop-need-requirement-specifies.component';
import { DevelopNeedRequirementComponent } from './develop-need-requirement/develop-need-requirement.component';
import { DevelopNeedSignificanceLossNGainsComponent } from './develop-need-significance-loss-n-gains/develop-need-significance-loss-n-gains.component';
import { DevelopNeedSignificanceReconnectToDriverComponent } from './develop-need-significance-reconnect-to-driver/develop-need-significance-reconnect-to-driver.component';
import { DevelopNeedSignificanceComponent } from './develop-need-significance/develop-need-significance.component';
import { HeaderComponent } from './header/header.component';


import { OpenAgreeToConsiderComponent } from './open-agree-to-consider/open-agree-to-consider.component';
import { OpenConnectToDriverBuisnessComponent } from './open-connect-to-driver-buisness/open-connect-to-driver-buisness.component';
import { OpenConnectToDriverComponent } from './open-connect-to-driver/open-connect-to-driver.component';
import { OpenConnectToDriversPersonalComponent } from './open-connect-to-drivers-personal/open-connect-to-drivers-personal.component';
import { OpenDashboardComponent } from './open-dashboard/open-dashboard.component';
import { OpenPurposeEngageWithConceptComponent } from './open-purpose-engage-with-concept/open-purpose-engage-with-concept.component';
import { OpenPurposeIntroductionComponent } from './open-purpose-introduction/open-purpose-introduction.component';
import { OpenPurposeComponent } from './open-purpose/open-purpose.component';
import { PresentSolutionDashboardComponent } from './present-solution-dashboard/present-solution-dashboard.component';
import { PresentSolutionDifferntiateCommanStandardsComponent } from './present-solution-differntiate-comman-standards/present-solution-differntiate-comman-standards.component';
import { PresentSolutionDifferntiateEvidenceComponent } from './present-solution-differntiate-evidence/present-solution-differntiate-evidence.component';
import { PresentSolutionDifferntiateWhyYouComponent } from './present-solution-differntiate-why-you/present-solution-differntiate-why-you.component';
import { PresentSolutionDifferntiateComponent } from './present-solution-differntiate/present-solution-differntiate.component';
import { PresentSolutionReconnectDriverExampleComponent } from './present-solution-reconnect-driver-example/present-solution-reconnect-driver-example.component';
import { PresentSolutionReconnectDriverImpactComponent } from './present-solution-reconnect-driver-impact/present-solution-reconnect-driver-impact.component';
import { PresentSolutionReconnectDriverComponent } from './present-solution-reconnect-driver/present-solution-reconnect-driver.component';
import { PresentSolutionSolutionCriticalIssueComponent } from './present-solution-solution-critical-issue/present-solution-solution-critical-issue.component';
import { PresentSolutionSolutionOverviewComponent } from './present-solution-solution-overview/present-solution-solution-overview.component';
import { PresentSolutionSolutionComponent } from './present-solution-solution/present-solution-solution.component';
import { ReasonToMoveJustifyComponent } from './reason-to-move-justify/reason-to-move-justify.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideHeaderBarComponent } from './side-header-bar/side-header-bar.component';
import { Trap1Component } from './trap1/trap1.component';
import { Trap2Component } from './trap2/trap2.component';
import { Stage1Component } from './dashboard/stage1/stage1.component';
import { Stage2Component } from './dashboard/stage2/stage2.component';
import { Stage3Component } from './dashboard/stage3/stage3.component';
import { Stage4Component } from './dashboard/stage4/stage4.component';
import { LoginComponent } from './login/login.component';
import { LivechatComponent } from './livechat/livechat.component';
import { AddquestionComponent } from './addquestion/addquestion.component';
import { SuccessfullComponent } from './successfull/successfull.component';
const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'side-bar',component:SideBarComponent},
{path:'header',component:HeaderComponent},
{path:'side-header-bar',component:SideHeaderBarComponent},
{path:'open-dashboard',component:OpenDashboardComponent},
{path:'open-purpose',component:OpenPurposeComponent},
{path:'open-purpose-introduction',component:OpenPurposeIntroductionComponent},
{path:'open-purpose-engage-with-concept',component:OpenPurposeEngageWithConceptComponent},
{path:'open-agree-to-consider',component:OpenAgreeToConsiderComponent},
{path:'open-connect-to-driver',component:OpenConnectToDriverComponent},
{path:'open-connect-to-drivers-personal',component:OpenConnectToDriversPersonalComponent},
{path:'develop-need-dashboard',component:DevelopNeedDashboardComponent},
{path:'develop-need-requirement',component:DevelopNeedRequirementComponent},
{path:'develop-need-requirement-framework',component:DevelopNeedRequirementFrameworkComponent},
{path:'develop-need-requirement-specifies',component:DevelopNeedRequirementSpecifiesComponent},
{path:'develop-need-requirement-importance',component:DevelopNeedRequirementImportanceComponent},
{path:'develop-need-gap-analysis',component:DevelopNeedGapAnalysisComponent},
{path:'develop-need-gap-analysis-ideal-v-current',component:DevelopNeedGapAnalysisIdealVCurrentComponent},
{path:'develop-need-gap-analysis-clarity',component:DevelopNeedGapAnalysisClarityComponent},
{path:'develop-need-significance',component:DevelopNeedSignificanceComponent},
{path:'develop-need-significance-loss-n-gains',component:DevelopNeedSignificanceLossNGainsComponent},
{path:'develop-need-significance-reconnect-to-driver',component:DevelopNeedSignificanceReconnectToDriverComponent},
{path:'present-solution-dashboard',component:PresentSolutionDashboardComponent},
{path:'present-solution-solution',component:PresentSolutionSolutionComponent},
{path:'present-solution-solution-overview',component:PresentSolutionSolutionOverviewComponent},
{path:'present-solution-solution-critical-issue',component:PresentSolutionSolutionCriticalIssueComponent},
{path:'present-solution-differntiate',component:PresentSolutionDifferntiateComponent},
{path:'present-solution-differntiate-comman-standards',component:PresentSolutionDifferntiateCommanStandardsComponent},
{path:'present-solution-differntiate-why-you',component:PresentSolutionDifferntiateWhyYouComponent},
{path:'present-solution-differntiate-evidence',component:PresentSolutionDifferntiateEvidenceComponent},
{path:'open-connect-to-driver-buisness',component:OpenConnectToDriverBuisnessComponent},
{path:'present-solution-reconnect-driver',component:PresentSolutionReconnectDriverComponent},
{path:'present-solution-reconnect-driver-impact',component:PresentSolutionReconnectDriverImpactComponent},
{path:'present-solution-reconnect-driver-example',component:PresentSolutionReconnectDriverExampleComponent},
{path:'close-dashboard',component:CloseDashboardComponent},
{path:'close-concerns',component:CloseConcernsComponent},
{path:'close-concerns-anticipate',component:CloseConcernsAnticipateComponent},
{path:'close-concerns-specifies',component:CloseConcernsSpecifiesComponent},
{path:'close-negotiation',component:CloseNegotiationComponent},
{path:'close-negotiation-agreement',component:CloseNegotiationAgreementComponent},
{path:'close-negotiation-alternatives',component:CloseNegotiationAlternativesComponent},
{path:'close-commit',component:CloseCommitComponent},
{path:'close-commit-summarise',component:CloseCommitSummariseComponent},
{path:'close-commit-next-step',component:CloseCommitNextStepComponent},
{path:'reason-to-move-justify',component:ReasonToMoveJustifyComponent},
{path:'decision-to-move-uncertain',component:DecisionToMoveUncertainComponent},
{path:'consider-options-compare',component:ConsiderOptionsCompareComponent},
{path:'commit-anxieties',component:CommitAnxietiesComponent},
{path:'trap1',component:Trap1Component},
{path:'trap2',component:Trap2Component},
{path:'stage1',component:Stage1Component},
{path:'stage2',component:Stage2Component},
{path:'stage3',component:Stage3Component},
{path:'stage4',component:Stage4Component},
{path:'login',component:LoginComponent},
{path:'livechat',component:LivechatComponent},
{path:'addquestion',component:AddquestionComponent},
{path:'successfull',component:SuccessfullComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }{}
