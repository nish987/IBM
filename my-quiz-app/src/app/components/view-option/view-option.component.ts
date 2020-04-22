import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-option',
  templateUrl: './view-option.component.html',
  styleUrls: ['./view-option.component.css']
})
export class ViewOptionComponent implements OnInit {

  questionId:any;
  opt:Array<any>=[];
  current:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('***', params.get('id'));
      this.current=params.get("text");
    
      this.questionId =Number(params.get("id"))
      console.log(this.questionId);
      console.log(params.get("choices"))
     this.opt=params.get("choices");
      //this.myForm.controls['id'].setValue(params.get('id'))
    });
  }

}
