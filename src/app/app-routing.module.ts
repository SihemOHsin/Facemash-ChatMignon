import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoterComponent } from './pages/voter/voter.component';
import { ScoreComponent } from './pages/score/score.component';

const routes: Routes = [
  { path: '', redirectTo: 'vote', pathMatch: 'full' },
  {path:'vote', component:VoterComponent},
  {path:'score', component:ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
