import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
   {path: '', redirectTo:'home' ,pathMatch:"full"},
   {path:'about',component :AboutComponent},
   {path:'portfolio',component : PortfolioComponent},
   {path:'contact',component : ContactComponent},
   {path:'gallary',component : GallaryComponent},
   {path:'home',component : HomeComponent},
   {path:'**', component: NotfoundComponent}
];
