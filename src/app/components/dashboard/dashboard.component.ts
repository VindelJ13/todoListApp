import { Component, OnInit } from '@angular/core';
import { IntrayService } from '../../services/intray.service';
import { TaskService } from '../../services/task.service';
import { ProjectService } from '../../services/project.service';
import { SomedayService } from '../../services/someday.service';
import { Intray } from '../../models/intray';
import { Task } from '../../models/task';
import { Project } from '../../models/project';
import { Someday } from '../../models/someday';
IntrayService
TaskService
ProjectService
SomedayService

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {



  public intrayJson: Intray[] = [];
  public taskJson: Task[] = [];
  public projectJson: Project[] = [];
  public somedayJson: Someday[] = [];

  public intrayCant: number = 0;
  public taskCant: number = 0;
  public projectCant: number = 0;
  public somedayCant: number = 0;

  constructor(private _intrayService: IntrayService, private _taskService: TaskService,
    private _projectService: ProjectService, private _somedayService: SomedayService) {

  }

  ngOnInit(): void {
    this.intrayJson = this._intrayService.getLocalStorage();
    this.taskJson = this._taskService.getLocalStorage();
    this.projectJson = this._projectService.getLocalStorage();
    this.somedayJson = this._somedayService.getLocalStorage();

    this.intrayCant = this.intrayJson.length;
    this.taskCant = this.taskJson.length;
    this.projectCant = this.projectJson.length;
    this.somedayCant = this.somedayJson.length;

  }




}
