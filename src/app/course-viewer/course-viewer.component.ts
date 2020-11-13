import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../services/ModuleServiceClient';
import {LessonService} from '../services/LessonServiceClient';

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {
  modules = [];
  lessons = [];
  courseTitle = '';
  cid = '';
  hello: string;
  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleService,
              private lessonService: LessonService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.moduleService.findModulesForCourse(params.cid)
        .then(modules => this.modules = modules);
      this.lessonService.findLessonsForModules(this.modules[0]._id)
        .then(lessons => this.lessons = lessons);
    });
  }
}
