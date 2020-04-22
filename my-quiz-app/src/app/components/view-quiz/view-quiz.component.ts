import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit {
  quiz:Array<Quiz>=[]
  constructor(private quizService:QuizService,private router:Router) { }

  ngOnInit(): void {
    this.quizService.fetchAllQuiz()
    .subscribe((res:Array<Quiz>)=>{
    console.log(res);
    this.quiz=res
    })
  }
  displayquestion(quiz:Array<Quiz>)
  {
    console.log('display question' ,quiz);
    this.router.navigate(['view-question', quiz])
  }

}
