import { Autor } from './autor';
import { Editorial } from './editorial';
export interface Libro {
   isbn :number,
   editoriales_id :number,
   titulo:string,
   sinopsis:string,
   n_paginas:string,
   editorial?:Editorial,
   autores?:Autor[]
}
