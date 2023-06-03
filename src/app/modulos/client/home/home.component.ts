import { Component } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { LibrosService } from '../../admin/services/libros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   libros:Libro[] = [];
   constructor( private serviceLibros :LibrosService){
    this.serviceLibros.getAll().subscribe({
      next: (resp)=>{
        if(resp){
          this.libros = resp
        }
      },
      error: err =>{
        Swal.fire("error" , err ,  "error");
      }
    })
   }
}
