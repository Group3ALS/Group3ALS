import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopnavComponent } from './users/topnav/topnav.component';
import { HomeComponent } from './users/home/home.component';
import { AboutComponent } from './users/about/about.component';
import { ReviewsComponent } from './users/reviews/reviews.component';
import { ContactsComponent } from './users/contacts/contacts.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'topnav', component: TopnavComponent, pathMatch: 'full'},
  {path:'home', component: HomeComponent,pathMatch:'full'},
  {path:'about', component: AboutComponent,pathMatch:'full'},
  {path:'reviews', component: ReviewsComponent,pathMatch:'full'},
  {path:'contacts', component: ContactsComponent,pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
}
