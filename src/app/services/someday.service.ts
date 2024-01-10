import { Injectable } from '@angular/core';
import { Someday } from '../models/someday';

@Injectable({
  providedIn: 'root'
})
export class SomedayService {

  public id: number = 0;

  public fechaFormat: string = new Date().toLocaleDateString("es-ES");
  public somedayObj: Someday;
  public somedayJson: Someday[] = [];

  constructor() {
    this.somedayObj = new Someday(0, "", this.fechaFormat, "");
  }

  addSomeday(nombreSomeday: string): void {
    const nuevoSomeday = new Someday(
      this.somedayJson.length + 1,
      nombreSomeday,
      this.somedayObj.fecha,
      this.somedayObj.categoria
    );

    this.somedayJson.push(nuevoSomeday);

    localStorage.setItem('Someday', JSON.stringify(this.somedayJson));
  }

  getLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      let data = localStorage.getItem('Someday');
      if (data) {
        this.somedayJson = JSON.parse(data);
        this.id = this.somedayJson.length;
      } else {
        this.somedayJson = [];
        this.id = 0;
      }
    } else {
      console.error('Recargando página...localStorage is not available.');
    }

    return this.somedayJson;
  }
}
