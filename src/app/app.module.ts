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
import {QuizzesServiceClient} from './services/QuizService';
import {QuestionsServiceClient} from './services/QuestionService';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { QuizComponent } from './quiz/quiz.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CourseTableComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent,
    QuizComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        routing,
        FormsModule,
    ],
  providers: [CourseService, LessonService, ModuleService, QuizzesServiceClient, QuestionsServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
