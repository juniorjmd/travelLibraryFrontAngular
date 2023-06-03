import { Libro } from "./libro";

export interface Editorial {
    id:number;
    nombre:string;
    sede ?:string;
    libros ?:Libro[] ;
    Mostrarlibros?:boolean;
}
