import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.css']
})
export class ViewQuestionComponent implements OnInit {
  ques:Array<Question>=[]
  myForm: FormGroup;
  quizId:number;
  currentquestion:any;
  choi:Array<any>=[]
  index: number = 0;
  length: any;
  isLastQuestion: boolean = false;
  isFirstQuestion: boolean = false;
  answer: Array<any> = [];
  count: number = 0;
  currentQuestionText:string;

  constructor(private route:ActivatedRoute, private quizService:QuizService,private router:Router) { }
  //quizId:number;

  ngOnInit(): void {    this.route.paramMap.subscribe(params => {
    console.log('***', params.get('id'));
  
    this.quizId =Number(params.get("id"))
    console.log(this.quizId);
    //this.myForm.controls['id'].setValue(params.get('id'))
  });
  this.quizService.displayAllQuestion(this.quizId)
  .subscribe((res:any)=>{
    
    console.log(res);
    this.ques = res.questions;
    console.log(this.ques)
    this.currentquestion=this.ques[0]
    console.log(this.currentquestion)
    this.choi=this.currentquestion.choices;
    console.log(this.choi)
   // console.log("jebfiwb")
   this.length = this.ques.length;
    console.log(this.length)
    this.isFirstQuestion = true;
    //console.log(this.questions.length)
    })
   // this.currentquestion=que
}
nextQuestion() {
  if (this.index < this.length) {
    ++this.index;
    if(this.index>0){
      this.isFirstQuestion=false;
      // console.log("from next",this.isFirstQuestion);
    }
    
    console.log(this.index);
    this.currentquestion = this.ques[this.index];
    this.choi = this.currentquestion.choices;
    this.isLastQuestion = false;
    //  console.log("last question",this.isLastQuestion);
    if (this.index == this.length - 1) {
      this.isLastQuestion = true;
      // console.log(this.isLastQuestion);
    }
  }

}
previousQuestion() {
  if (this.index > 0) {
    --this.index;
    if(this.index<this.length){
      this.isLastQuestion=false;
    }
    console.log(this.index);
    this.currentquestion = this.ques[this.index];
    this.choi = this.currentquestion.choices;
    this.isFirstQuestion = false;
    console.log("first question", this.isFirstQuestion);
    if (this.index == 0) {
      this.isFirstQuestion = true;
      console.log("first question", this.isFirstQuestion);
    }
  }
}
calculate(isAnswer: boolean) {
  this.answer[this.index]=isAnswer;
  console.log(this.answer);
}
finalResult() {
 
}
viewResult(){
  this.answer.forEach(i => {
    if (i == true) {
      this.count++;
    }
  });
  console.log("result", this.count);
  this.router.navigate(["view-result",{count:this.count,totalQuestion:this.length}]);

}
displayOptions(currentquestion)
{
  console.log("question is",currentquestion)
  this.router.navigate(['view-option', currentquestion])

}


}
