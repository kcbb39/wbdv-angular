import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question;
  @Input() grading;
  rightAnswer = '';
  constructor() {}

  ngOnInit(): void {
    this.rightAnswer = this.question.correct;
  }

}
