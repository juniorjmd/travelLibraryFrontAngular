import { Component, ErrorHandler } from '@angular/core';
import { Editorial } from 'src/app/interfaces/editorial';
import Swal from 'sweetalert2';
import { EditorialesService } from '../services/editoriales.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent {
  editoriales:Editorial[] = [];
  NuevaEditorial:Editorial  = {
    id: 0,
    nombre: ''
  } ;

  show = true

  constructor( private  serviceEditorial : EditorialesService ,  ){
    this.serviceEditorial.getAll().subscribe( editoriales =>{  if(editoriales) {this.editoriales = editoriales; }  })

  }

  
  MostrarNuevo(){
    this.show = false
    this.NuevaEditorial.nombre = "";
    this.NuevaEditorial.sede = "";
    this.NuevaEditorial.id = 0;
  }

  ocultarNuevo(){
    this.NuevaEditorial.nombre = "";
    this.NuevaEditorial.sede = "";
    this.NuevaEditorial.id = 0;
    this.show = true;
  }


  editar(t : Editorial){
    this.MostrarNuevo();
    this.NuevaEditorial.id  = t.id;
    this.NuevaEditorial.nombre  = t.nombre;
    this.NuevaEditorial.sede  = t.sede;
    
  }
  eliminar(t : Editorial){
    try { 
      this.serviceEditorial.deleteEditorial(t.id).subscribe(
        {next: result =>{
             console.log(result);
             this.editoriales = result.value
             this.show = true;
        },
         error : err => { Swal.fire("error" , err.message , "error") }
        }
      ) 
  //  
  } catch (error:any) {
    console.error(error.message);
    
      Swal.fire("error" , error.message , "error")
    }
  }
  
  GuardarNuevo(){
    try {
      
    
      if (this.NuevaEditorial.nombre == "" )  throw new Error ("el nombre no puede estar vacio") ;
      if (this.NuevaEditorial.sede == "" ) throw new Error ("la sede no puede estar vacio") ;
      
      if (this.NuevaEditorial.id == 0 ){
      this.serviceEditorial.postNuevaEditoria(this.NuevaEditorial).subscribe(
        {next: result =>{
             console.log(result);
             this.editoriales = result.value
             this.show = true;
        },
         error : err => {throw new Error (err)}
           }
      )
       }else{
        
      this.serviceEditorial.putEditoria(this.NuevaEditorial).subscribe(
        {next: result =>{
             console.log(result);
             this.editoriales = result.value
             this.show = true;
        },
         error : err => {throw new Error (err)}
           }
      )
       }
  //  
  } catch (error:any) {
    console.error(error.message);
    
      Swal.fire("error" , error.message , "error")
    }
  }




inicializaMostrarLibro(){
  this.editoriales.forEach((AUT , INDEX)=>{
    AUT.Mostrarlibros = false;
    this.editoriales[INDEX] = AUT;
  })
}
  mostrarLibro( i:number){
    this.inicializaMostrarLibro(); 
    this.serviceEditorial.getLibrosEditorial(this.editoriales[i].id).subscribe( libros =>{  if(libros) {this.editoriales[i].libros = libros; }    this.editoriales[i].Mostrarlibros =true; })
  }

}
