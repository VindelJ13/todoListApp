import { Task } from "./task";

export class Project {
    constructor(
        public _idProject: number,
        public projectName: string,
        public fecha: string,
        public realizado: boolean,
        public btnStyle: string,
        public estado: string,
        public resultado: string,
        public tasks: Task[]
    ) { }

}