import { Component } from '@angular/core';
import { Intray } from '../../models/intray';
import { TaskService } from '../../services/task.service';
import moment from 'moment';
import 'moment/locale/es';
import { IntrayService } from '../../services/intray.service';
import { SomedayService } from '../../services/someday.service';

@Component({
  selector: 'app-intray',
  templateUrl: './intray.component.html',
  styleUrl: './intray.component.css'
})
export class IntrayComponent {
  seccionEspecifica: any;

  public fecha: string;
  public fechaFormat: string = new Date().toLocaleDateString("es-ES");//.replace(/\//g, '-');

  public selectedIntray: Intray | null = null;
  public selectedCategoria: string = "";
  public showProjectsComponent: boolean = false;
  public IntrayObj: Intray;
  public IntrayJson: Intray[] = [];
  public indice: any;

  constructor(private _taskService: TaskService, private _intrayService: IntrayService, private _somedayService: SomedayService) {
    this.fecha = moment().locale('es').format('dddd DD [de] MMMM [del] YYYY');
    this.IntrayObj = new Intray(0, "", this.fechaFormat, "Intray");
  }

  ngOnInit(): void {
    this.IntrayJson = this._intrayService.getLocalStorage();
  }

  openModal(index: number) {
    this._intrayService.openModal(index);

    this.selectedIntray = this._intrayService.selectedIntray;
    this.indice = index;
    this.selectedCategoria = "";
    this.showProjectsComponent = false;
  }

  addIntray(form?: any) {
    this._intrayService.addIntray(this.IntrayObj.nombreIntray);
    form.reset();
  }

  deleteIntray() {
    this._intrayService.deleteIntray();
  }

  onChangeCategoria() {
    // Mostrar el componente projects automáticamente cuando la opción 2 se selecciona
    this.showProjectsComponent = this.selectedCategoria === "2";
  }

  changeCategoria() {
    switch (this.selectedCategoria) {
      case "1":
        this._taskService.addTask(this.IntrayJson[this.indice].nombreIntray);
        this.deleteIntray();
        break;
      case "2":
        this.deleteIntray();
        break;
      case "3":
        this._somedayService.addSomeday(this.IntrayJson[this.indice].nombreIntray);
        this.deleteIntray();
        break;
      default:
        break;
    }

  }


}
