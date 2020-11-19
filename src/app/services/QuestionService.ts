import {Injectable} from '@angular/core';
@Injectable()
export class QuestionsServiceClient {
  findQuestionsForQuiz = (qid) =>
    fetch(`api/quizzes/${qid}/questions`)
      .then(response => response.json())
}
