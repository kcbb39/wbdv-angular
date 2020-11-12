import {Injectable} from '@angular/core';

@Injectable()
export class LessonService {
  findLessonsForModules = (module) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/jannunzi/courses/${module._id}/modules`)
      .then(response => response.json())
}
