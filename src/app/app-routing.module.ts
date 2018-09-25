import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: '',
    component: SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
