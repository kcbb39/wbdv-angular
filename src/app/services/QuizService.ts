import {Injectable} from '@angular/core';
@Injectable()
export class QuizzesServiceClient {
  findAllQuizzes = () =>
    fetch('/api/quizzes')
      .then(response => response.json())
  findQuizById = (qid) =>
    fetch(`/api/quizzes/${qid}`)
      .then(response => response.json())
}
