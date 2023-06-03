import { Component, Input } from '@angular/core';
import { Libro } from '../../../interfaces/libro';

@Component({
  selector: 'client-tabsLibro',
  templateUrl: './tabs-libro.component.html',
  styleUrls: ['./tabs-libro.component.css']
})
export class TabsLibroComponent {
@Input() Libro!:Libro;
}
