import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  public id: number = 0;

  public fechaFormat: string = new Date().toLocaleDateString("es-ES");
  public taskObj: Task;
  public tasksJson: Task[] = [];

  constructor() {
    this.taskObj = new Task(0, "", this.fechaFormat, false, "radio_button_unchecked", false);
  }

  addTask(nombreTask: string): void {
    const nuevoTask = new Task(
      this.tasksJson.length + 1,
      nombreTask,
      this.taskObj.fecha,
      this.taskObj.realizado,
      this.taskObj.btnStyle,
      this.taskObj.isFromProject
    );

    this.tasksJson.push(nuevoTask);

    localStorage.setItem('Tasks', JSON.stringify(this.tasksJson));
  }

  getLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      let data = localStorage.getItem('Tasks');
      if (data) {
        this.tasksJson = JSON.parse(data);
        this.id = this.tasksJson.length;
      } else {
        this.tasksJson = [];
        this.id = 0;
      }
    } else {
      console.error('Recargando página...localStorage is not available.');
    }

    return this.tasksJson;
  }

}
