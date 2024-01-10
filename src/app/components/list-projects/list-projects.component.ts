import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import Swal from 'sweetalert2';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css'
})
export class ListProjectsComponent implements OnInit {

  public id: number = 0;
  public projectJson: Project[] = [];
  public selectedProject: Project | null = null;
  public selectedEstado: string = '';
  public indice: any;

  constructor(private _projectService: ProjectService) {

  }

  ngOnInit(): void {
    this.projectJson = this._projectService.getLocalStorage();
  }

  openModal(index: number) {
    this.selectedProject = this.projectJson[index];
    this.selectedEstado = '';
    this.indice = index
  }

  changeTaskStatus(indiceTask: number) {
    this.selectedProject = this.projectJson[this.indice]
    const selectedTask = this.selectedProject.tasks[indiceTask];

    selectedTask.realizado = !selectedTask.realizado;

    if (selectedTask.realizado) {
      selectedTask.btnStyle = "check_circle";
    } else {
      selectedTask.btnStyle = "radio_button_unchecked";
    }

    localStorage.setItem('Projects', JSON.stringify(this.projectJson));
  }

  deleteProject(indiceProject: any) {
    //let projectsString: any = localStorage.getItem('Projects');
    //this.projectJson = JSON.parse(projectsString);



    // Filtrar el array para excluir el proyecto
    //const filteredProjects = this.projectJson.filter(project => project._idProject !== indice);

    //Utiliza SweetAlert para mostrar la confirmación
    Swal.fire({
      title: 'Confirmar Eliminación',
      text: '¿Estás seguro de que deseas eliminar este proyecto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.projectJson.splice(this.indice, 1);
        localStorage.setItem('Projects', JSON.stringify(this.projectJson));
        window.location.reload();
      }
    });

  }

  editEstado() {
    this.projectJson[this.indice].estado = this.selectedEstado;

    localStorage.setItem('Projects', JSON.stringify(this.projectJson));
    this.selectedEstado = '';
  }

}

