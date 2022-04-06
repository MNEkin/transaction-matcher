import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { MatcherComponent } from './matcher/matcher.component';

const routes: Routes = [
  {path: '', component: MatcherComponent},
  {path: '/', component: MatcherComponent},
  {path: 'upload', component: MatcherComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}