import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../services/ModuleServiceClient';
import {LessonService} from '../services/LessonServiceClient';
import {ModuleListComponent} from '../module-list/module-list.component';
import {LessonTabsComponent} from '../lesson-tabs/lesson-tabs.component';
import {CourseService} from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer-component',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css'],
  providers: [ModuleListComponent, LessonTabsComponent],
})
export class CourseViewerComponent implements OnInit {
  modules = [];
  lessons = [];
  courseTitle = '';
  cid = '';
  mid = '';
  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleService,
              private lessonService: LessonService,
              private courseService: CourseService) {
  }
  selectModule = (mid: string) => {
    this.mid = mid;
    this.lessonService.findLessonsForModules(mid).then((lessons) => this.lessons = lessons).then(() => this.getLessonsForModule(mid));
  }
  getLessonsForModule = (mid: string) => {
    this.lessonService.findLessonsForModules(mid).then((result) => {
      this.lessons = result;
    }).then(() => console.log(this.lessons));
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.cid = params.cid;
      this.courseService.findCourse(params.cid).then(resp => this.courseTitle = resp.data.title);
      this.moduleService.findModulesForCourse(params.cid)
        .then(modules => this.modules = modules).then(() => {console.log(this.modules);
        }).then(() => this.selectModule(this.modules[0]._id));
      });
  }
}
