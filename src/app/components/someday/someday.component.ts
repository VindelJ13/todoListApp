import { Component, OnInit } from '@angular/core';
import { SomedayService } from '../../services/someday.service';
import { Someday } from '../../models/someday';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-someday',
  templateUrl: './someday.component.html',
  styleUrl: './someday.component.css'
})
export class SomedayComponent implements OnInit {


  public somedayJson: Someday[] = [];

  constructor(private _somedayService: SomedayService) {

  }

  ngOnInit(): void {
    this.somedayJson = this._somedayService.getLocalStorage();
  }

  deleteSomeday(indice: any) {
    Swal.fire({
      title: 'Confirmar Eliminación',
      text: '¿Estás seguro de que lo deseas eliminar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.somedayJson.splice(indice, 1);
        localStorage.setItem('Someday', JSON.stringify(this.somedayJson));
        window.location.reload();
      }
    });
  }

}
