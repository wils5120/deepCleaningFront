import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactUsComponent},
  {path:'', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
