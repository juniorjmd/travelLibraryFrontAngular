import { Component, Input } from '@angular/core';
import { Autor } from 'src/app/interfaces/autor';

@Component({
  selector: 'admin-libros-por-autor',
  templateUrl: './libros-por-autor.component.html',
  styleUrls: ['./libros-por-autor.component.css']
})
export class LibrosPorAutorComponent {
 @Input() autor !:Autor ; 
 constructor(){
   
 }

 ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  console.log(this.autor);
 }
}
