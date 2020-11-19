import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CourseService} from '../services/CourseServiceClient';
import {ModuleService} from '../services/ModuleServiceClient';
import {LessonService} from '../services/LessonServiceClient';
import {QuizzesServiceClient} from '../services/QuizService';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  courses = [];
  selectedCourse = {title: '', id: ''};
  modules = [];
  selectedModule = {title: ''};
  lessons = [];
  quizzes = [];
  constructor(private courseService: CourseService,
              private moduleService: ModuleService,
              private lessonService: LessonService,
              private quizService: QuizzesServiceClient,
              private router: Router) { }

  createCourse = () =>
    this.courseService.createCourse()
      .then(actualCourse => this.courses.push(actualCourse))

  createModuleForCourse = (course) =>
    this.moduleService.createModuleForCourse(course)
      .then(actualModule => this.modules.push(actualModule))

  deleteModule = (module) =>
    this.moduleService.deleteModule(module)
      .then(status => this.modules = this.modules.filter(m => m !== module))

  deleteCourse = (course) =>
    this.courseService.deleteCourse(course)
      .then(status => this.courses = this.courses.filter(c => c !== course))

  selectCourse = (course) => {
    this.selectedCourse = course;
    this.moduleService.findModulesForCourse(course)
      .then(modules => this.modules = modules);
    this.selectedModule = this.selectedModule[0];
    this.lessonService.findLessonsForModules(this.selectedModule).then(lessons => this.lessons = lessons);
  }
  printQuizzes(): void{
    this.quizService.findAllQuizzes().then(quizzes => console.log(quizzes));
  }
  ngOnInit(): void {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }
  toCourseViewer(cid): void {
    this.router.navigate(['table/courses/', cid, 'modules']);
  }
}

