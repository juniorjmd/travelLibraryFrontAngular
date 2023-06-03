import { Component } from '@angular/core';
import { Autor } from 'src/app/interfaces/autor';
import Swal from 'sweetalert2';
import { AutoresService } from '../services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent {

  autores:Autor[] = [];


  NuevaAutor:Autor  = {
    id: 0,
    nombre: '' 
  } ;

  show = true

  constructor( private  serviceAutor : AutoresService ,  ){
    this.serviceAutor.getAll().subscribe( autores =>{  if(autores) {this.autores = autores; }  })

  }
inicializaMostrarLibro(){
  this.autores.forEach((AUT , INDEX)=>{
    AUT.Mostrarlibros = false;
    this.autores[INDEX] = AUT;
  })
}
  mostrarLibro( i:number){
    this.inicializaMostrarLibro(); 
    this.serviceAutor.getLibrosAutor(this.autores[i].id).subscribe( libros =>{  if(libros) {this.autores[i].libros = libros; }    this.autores[i].Mostrarlibros =true; })
  }



  
  MostrarNuevo(){
    this.show = false
    this.NuevaAutor.nombre = "";
    this.NuevaAutor.apellido = "";
    this.NuevaAutor.id = 0;
  }

  ocultarNuevo(){
    this.NuevaAutor.nombre = "";
    this.NuevaAutor.apellido = "";
    this.NuevaAutor.id = 0;
    this.show = true;
  }


  editar(t : Autor){
    this.MostrarNuevo();
    this.NuevaAutor.id  = t.id;
    this.NuevaAutor.nombre  = t.nombre;
    this.NuevaAutor.apellido  = t.apellido;
    
  }
  eliminar(t : Autor){
    try { 
      this.serviceAutor.delete(t.id).subscribe(
        {next: result =>{
             console.log(result);
             this.autores = result.value
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
    
      if (this.NuevaAutor.nombre == "" )  throw new Error ("el nombre no puede estar vacio") ;  
      if (this.NuevaAutor.id == 0 ){
      this.serviceAutor.post(this.NuevaAutor).subscribe(
        {next: result =>{
             console.log(result);
             this.autores = result.value
             this.show = true;
        },
         error : err => {throw new Error (err)}
           }
      )
       }else{
        
      this.serviceAutor.put(this.NuevaAutor).subscribe(
        {next: result =>{
             console.log(result);
             this.autores = result.value
             this.show = true;
        },
         error : err => {throw new Error (err)}
           }
      )
       } 
  } catch (error:any) {
    console.error(error.message);
    
      Swal.fire("error" , error.message , "error")
    }
  }

}
