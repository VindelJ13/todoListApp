import { Injectable } from '@angular/core';
import { Intray } from '../models/intray';

@Injectable({
  providedIn: 'root'
})
export class IntrayService {

  public id: number = 0;

  public fechaFormat: string = new Date().toLocaleDateString("es-ES");

  //OpenModal
  public selectedIntray: Intray | null = null;
  public indice: any;

  public IntrayObj: Intray;
  public IntrayJson: Intray[] = [];

  public intrayName: string = '';
  constructor() {
    this.IntrayObj = new Intray(0, "", this.fechaFormat, "Intray");
  }

  openModal(index: number) {
    this.selectedIntray = this.IntrayJson[index];
    this.indice = index;
  }

  deleteIntray() {
    this.IntrayJson.splice(this.indice, 1);
    localStorage.setItem('Intray', JSON.stringify(this.IntrayJson));
  }

  addIntray(nombreIntray: string) {
    this.intrayName = nombreIntray;
    const nuevoIntray = new Intray(
      this.IntrayJson.length + 1,
      nombreIntray,
      this.IntrayObj.fecha,
      this.IntrayObj.categoria
    );

    this.IntrayJson.push(nuevoIntray);
    localStorage.setItem('Intray', JSON.stringify(this.IntrayJson));
  }


  getLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      let data = localStorage.getItem('Intray');
      if (data) {
        this.IntrayJson = JSON.parse(data);
        this.id = this.IntrayJson.length;
      } else {
        this.IntrayJson = [];
        this.id = 0;
      }
    } else {
      console.error('Recargando página...localStorage is not available.');
    }

    return this.IntrayJson;
  }
}
