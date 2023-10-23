import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepOneComponent } from './pages/step-one/step-one.component';
import { StepTwoComponent } from './pages/step-two/step-two.component';
import { HomeComponent } from './pages/home/home.component';
import { StepThreeComponent } from './pages/step-three/step-three.component';
import { ResultsComponent } from './pages/results/results.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'step1', component: StepOneComponent },
  { path: 'step2', component: StepTwoComponent },
  { path: 'step3', component: StepThreeComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
