import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './users/topnav/topnav.component';
import { FooterComponent } from './users/footer/footer.component';
import { HomeComponent } from './users/home/home.component';
import { AboutComponent } from './users/about/about.component';
import { ReviewsComponent } from './users/reviews/reviews.component';
import { ContactsComponent } from './users/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ReviewsComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
