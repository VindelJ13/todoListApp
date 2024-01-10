export class Task {
    constructor(
        public _id: number,
        public task: string,
        public fecha: string,
        public realizado: boolean,
        public btnStyle: string,
        public isFromProject: boolean,
        public idProject?: number
    ) { }
}