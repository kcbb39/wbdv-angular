import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../services/QuestionService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor(private svc: QuestionsServiceClient,
              private route: ActivatedRoute) { }
  questions = [];
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.svc.findQuestionsForQuiz(ps.quizId)
        .then(qs => this.questions = qs);
    });
  }


}
