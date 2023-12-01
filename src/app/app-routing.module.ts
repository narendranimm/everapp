import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { RegisterComponent } from './registration-flow/register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',pathMatch:"full",redirectTo:'home'},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'t&c',component:TermsConditionsComponent},
  {path:'register',component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
