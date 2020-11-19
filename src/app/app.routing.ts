import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const appRoutes: Routes = [
  { path: 'table/courses', component: CourseTableComponent },
  { path: 'table/courses/:cid/modules', component: CourseViewerComponent },
  { path: 'table/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: 'courses/:courseId/quizzes', component: QuizzesComponent},
  { path: 'courses/:courseId/quizzes/:quizId', component: QuizComponent },


];
export const routing = RouterModule.forRoot(appRoutes);
