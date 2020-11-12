import { Routes, RouterModule } from '@angular/router';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';

const appRoutes: Routes = [
  { path: 'table/courses', component: CourseTableComponent },
  { path: 'table/courses/:cid/modules', component: CourseViewerComponent },
  { path: 'table/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
