import {Component, Input, OnInit, Output} from '@angular/core';
import {EventEmitter} from 'events';



@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {
constructor() {}
  @Input() grading;
  rightAnswer = '';
  @Input()
  question = {_id: '', title: '', type: '', choices: [], correct: '', question: ''};

  @Output()
  answerChange = new EventEmitter<string>();

  ngOnInit(): void {
    this.rightAnswer = this.question.correct;
  }
  submitAnswer = () =>
    this.answerChange.emit(this.rightAnswer)
}
