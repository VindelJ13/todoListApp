import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SomedayComponent } from './components/someday/someday.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { IntrayComponent } from './components/intray/intray.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'intray', component: IntrayComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'someday', component: SomedayComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'list-projects', component: ListProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
