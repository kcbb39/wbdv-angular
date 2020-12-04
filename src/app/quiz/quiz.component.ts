import { Component, OnInit } from '@angular/core';
import {QuestionsServiceClient} from '../services/QuestionService';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  grading = false;
  quizId;

  constructor(private svc: QuestionsServiceClient,
              private route: ActivatedRoute) {}
  questions = [];
  ngOnInit(): void {
    this.route.params.subscribe(ps => {
      this.quizId = ps.quizId;
      this.svc.findQuestionsForQuiz(ps.quizId)
        .then(qs => this.questions = qs);
    });
  }
  grade(): void {
    this.grading = true;
    fetch(`/api/quizzes/${this.quizId}/attempts`, {
      method: 'POST',
      body: JSON.stringify(this.questions),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())
      .then(result => console.log(result));
  }

}
