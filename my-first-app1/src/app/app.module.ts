import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DateComponent } from './date.component';
import { MessageComponent } from './message.component';
import { BadgeComponent } from './components/badge/badge.component';
import { CardComponent } from './components/card/card.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';

@NgModule({
  declarations: [
    AppComponent, DateComponent,MessageComponent, BadgeComponent, CardComponent, JumbotronComponent
    
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
