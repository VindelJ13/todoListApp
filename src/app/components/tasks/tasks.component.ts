import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import moment from 'moment';
import 'moment/locale/es';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  public fecha: string;
  public fechaFormat: string = new Date().toLocaleDateString("es-ES");//.replace(/\//g, '-');

  public taskObj: Task;
  public tasksJson: Task[] = [];

  constructor(private _taskService: TaskService) {
    this.fecha = moment().locale('es').format('dddd DD [de] MMMM [del] YYYY');
    this.taskObj = new Task(0, "", this.fechaFormat, false, "radio_button_unchecked", false);
  }

  ngOnInit(): void {
    this.tasksJson = this._taskService.getLocalStorage();
  }

  addTask(form?: any) {
    this._taskService.addTask(this.taskObj.task);
    form.reset();
  }

  deleteTask(indice: any) {
    this.tasksJson.splice(indice, 1);
    localStorage.setItem('Tasks', JSON.stringify(this.tasksJson));
  }

  changeTaskStatus(indice: number) {
    const selectedTask = this.tasksJson[indice];
    selectedTask.realizado = !selectedTask.realizado;

    if (selectedTask.realizado) {
      this.tasksJson[indice].btnStyle = "check_circle";
    } else {
      this.tasksJson[indice].btnStyle = "radio_button_unchecked";
    }

    localStorage.setItem('Tasks', JSON.stringify(this.tasksJson));

  }

}
