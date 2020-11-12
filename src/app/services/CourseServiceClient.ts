import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable()
export class CourseService {
  findAllCourses = () =>
    axios.get('https://wbdv-generic-server.herokuapp.com/api/001299573/courses').then((resp) => resp.data)
  createCourse = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/001299573/courses', {
      method: 'POST',
      body: JSON.stringify({title: 'New Course'}),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  updateCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001299573/courses/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())
  deleteCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/001299573/courses/${course._id}`, {
      method: 'DELETE'
    })
      .then(response => response.json())
}
