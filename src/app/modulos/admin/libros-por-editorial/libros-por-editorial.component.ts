import { Component, Input } from '@angular/core';
import { Editorial } from 'src/app/interfaces/editorial';

@Component({
  selector: 'admin-libros-por-editorial',
  templateUrl: './libros-por-editorial.component.html',
  styleUrls: ['./libros-por-editorial.component.css']
})
export class LibrosPorEditorialComponent {
  @Input() editorial!:Editorial;
}
