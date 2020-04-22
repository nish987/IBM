import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewQuizComponent } from './components/view-quiz/view-quiz.component';
import { ViewQuestionComponent } from './components/view-question/view-question.component';
import { ViewOptionComponent } from './components/view-option/view-option.component';
import { ResultComponent } from './components/result/result.component';
const appRoutes: Routes = [
 
  { path: 'view',      component: ViewQuizComponent},
    {path: 'view-question',      component: ViewQuestionComponent },
    { path: 'view-option',      component: ViewOptionComponent},
    { path: 'view-result',      component: ResultComponent},
 
  
];
@NgModule({
  declarations: [
    AppComponent,
    ViewQuizComponent,
    ViewQuestionComponent,
    ViewOptionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
