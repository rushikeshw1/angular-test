import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path : '', // default route
    loadChildren:'./how-it-works/how-it-works.module#HowItWorksModule'
  },
  {
    path : 'user-list',
    loadChildren:'./users/users.module#UsersModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
