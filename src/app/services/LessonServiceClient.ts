import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModules = (mid) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001299573/modules/${mid}/lessons`)
      .then(response => response.json())
}
