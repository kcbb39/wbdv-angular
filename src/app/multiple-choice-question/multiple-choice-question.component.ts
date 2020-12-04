import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  @Input() question = {_id: '', title: '', type: '', choices: [], correct: '', question: ''};
  @Input() grading;
  rightAnswer = '';
  constructor() {}
  @Output()
  answerChange = new EventEmitter<string>();
  submitAnswer = () =>
    this.answerChange.emit(this.rightAnswer)
  ngOnInit(): void {
    this.rightAnswer = this.question.correct;
  }
}
