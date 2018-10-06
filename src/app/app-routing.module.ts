import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SummaryComponent } from './summary/summary.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'u-d/:id',
    component: SummaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
