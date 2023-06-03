import { Libro } from "./libro";

export interface Autor { 
        id:number, 
        nombre :string,
        apellido ?:string,
        libros ?:Libro[],
        Mostrarlibros?:boolean ,
}
