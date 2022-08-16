import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogindashComponent } from './logindash/logindash.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',component:LogindashComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'reg',component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
