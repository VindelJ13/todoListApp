import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public id: number = 0
  public projectJson: Project[] = [];

  constructor() { }

  getLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      let data = localStorage.getItem('Projects');
      if (data) {
        this.projectJson = JSON.parse(data);
        this.id = this.projectJson.length;
      } else {
        this.projectJson = [];
        this.id = 0;
      }
    } else {
      console.error('Recargando página...localStorage is not available.');
    }

    return this.projectJson;

  }
}
