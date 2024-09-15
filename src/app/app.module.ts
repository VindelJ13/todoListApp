import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SomedayComponent } from './components/someday/someday.component';
import { TasksComponent } from './components/tasks/tasks.component';
//
import { FormsModule } from '@angular/forms';
import { ListProjectsComponent } from './components/list-projects/list-projects.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { IntrayComponent } from './components/intray/intray.component';

//Services
import { TaskService } from './services/task.service';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectsComponent,
    SomedayComponent,
    TasksComponent,
    ListProjectsComponent,
    HomeComponent,
    IntrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideClientHydration(),
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
