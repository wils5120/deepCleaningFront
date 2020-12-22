import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { ServiceComponent } from './services/service/service.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactUsComponent},
  {path:'about', component: AboutComponent},
  {path:'', component: HomeComponent},
  {path:'service', component: ServiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
