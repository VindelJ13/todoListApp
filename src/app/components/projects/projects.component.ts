import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { Task } from '../../models/task';
import { IntrayService } from '../../services/intray.service';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  @Input() initialProjectName: string | undefined;

  public id: number = 0;
  public fechaFormat: string = new Date().toLocaleDateString("es-ES");//.replace(/\//g, '-');

  public taskObj: Task;
  public tasksJson: Task[] = [];

  public projectObj: Project;
  public projectJson: Project[] = [];

  public currentRoute: any;
  constructor(private _intrayService: IntrayService, private router: Router, private _projectService: ProjectService) {
    this.taskObj = new Task(0, "", this.fechaFormat, false, "radio_button_unchecked", true);

    this.projectObj = new Project(this.id, "", this.fechaFormat, false, "", "", "", []);
  }

  ngOnInit(): void {
    this.projectJson = this._projectService.getLocalStorage();
    this.currentRoute = this.router.url;
  }

  addProject(form?: any) {
    this.id = this.projectJson.length + 1;

    if (this.currentRoute == '/projects') {
      const nuevoProject = new Project(
        this.id,
        this.projectObj.projectName,
        this.projectObj.fecha,
        this.projectObj.realizado,
        this.projectObj.btnStyle,
        this.projectObj.estado,
        this.projectObj.resultado,
        this.tasksJson
      );

      this.projectJson.push(nuevoProject);

      localStorage.setItem('Projects', JSON.stringify(this.projectJson));

      form.reset();
      this.tasksJson = [];
    }

    let nombre: any = this._intrayService.selectedIntray?.nombreIntray;
    if (this.currentRoute == '/intray') {
      const nuevoProject = new Project(
        this.id,
        nombre,
        this.projectObj.fecha,
        this.projectObj.realizado,
        this.projectObj.btnStyle,
        this.projectObj.estado,
        this.projectObj.resultado,
        this.tasksJson
      );

      this.projectJson.push(nuevoProject);

      localStorage.setItem('Projects', JSON.stringify(this.projectJson));

      form.reset();
      this.tasksJson = [];

      this._intrayService.deleteIntray();
    }

  }

  addTask(form: any) {
    const nuevoTask = new Task(
      this.tasksJson.length + 1,
      this.taskObj.task,
      this.taskObj.fecha,
      this.taskObj.realizado,
      this.taskObj.btnStyle,
      this.taskObj.isFromProject
    );

    this.tasksJson.push(nuevoTask);
    form.reset();
  }

  deleteTask(indice: any) {
    this.tasksJson.splice(indice, 1);
  }

}
