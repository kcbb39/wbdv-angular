import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CourseService} from './services/CourseServiceClient';
import {LessonService} from './services/LessonServiceClient';
import {ModuleService} from './services/ModuleServiceClient';
import { CourseTableComponent } from './course-table/course-table.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import {RouterModule} from '@angular/router';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing,
  ],
  providers: [CourseService, LessonService, ModuleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
