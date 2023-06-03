import { Component } from '@angular/core';
import { Autor } from 'src/app/interfaces/autor';
import { Libro } from 'src/app/interfaces/libro';
import Swal from 'sweetalert2';
import { LibrosService } from '../services/libros.service';
import { AutoresService } from '../services/autores.service';
import { Editorial } from 'src/app/interfaces/editorial';
import { EditorialesService } from '../services/editoriales.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  Editoriales:Editorial[] = [];
  Libros:Libro[] = []; 
  autoresDisponibles:Autor[] = [];
  autoresDB:Autor[]=[]
  autorNuevo=-1;
  show=true;
  nLibro:Libro = {
    isbn: 0,
    editoriales_id: 0,
    titulo: '',
    sinopsis: '',
    n_paginas: '' ,
    autores:[]
  }
  constructor( private librosService : LibrosService , private autorService : AutoresService ,  private editorialService : EditorialesService){
  
    
 this.editorialService.getAll().subscribe({ next :  Editoriales =>{
  if(Editoriales){
   this.Editoriales = Editoriales ; 
 }
 } , error : err =>  {Swal.fire("error" , err.message , "error")} });


  this.autorService.getAll().subscribe({ next :  autores =>{
   if(autores){
    this.autoresDB = autores ;
    this.autoresDisponibles = autores ; 
  }
  } , error : err =>  {Swal.fire("error" , err.message , "error")} })
  this.getAllLibros();
  }

  

/* isbn :number,
   editoriales_id :number,
   titulo:string,
   sinopsis:string,
   n_paginas:string
   editorial:Editorial*/
   eliminarAutor(i:number){
    if(  typeof(this.nLibro.autores ) != 'undefined' )
       { const aut = this.nLibro.autores[i] ; 
        this.nLibro.autores = this.nLibro.autores.filter((item) => item.id !== aut.id  )      
    this.autoresDisponibles = this.autoresDB.filter((item) => !this.nLibro.autores?.includes(item)) 
     
    this.autorNuevo = -1;  
   }
  }
   setAutor(){  
    if(this.autorNuevo >=0 ) { 
      if(this.nLibro.autores)
       {  this.nLibro.autores?.push( this.autoresDisponibles[this.autorNuevo]); }
      else
       {this.nLibro.autores   =  [this.autoresDisponibles[this.autorNuevo]] ;}  
    this.autoresDisponibles = this.autoresDB.filter((item) => !this.nLibro.autores?.includes(item))  
    this.autorNuevo = -1;   
  }
   }

 getAllLibros(){
  this.Libros = [];
  this.librosService.getAll().subscribe( {
    next:libros =>{  if(libros) {this.Libros = libros; }  },
    error: err => {Swal.fire("error" , err.message , "error")}
})

 }
  
  MostrarNuevo(){
    this.show = false
    this.nLibro= {
      isbn: 0,
      editoriales_id: 0,
      titulo: '',
      sinopsis: '',
      n_paginas: '' , 
      autores:[]
    }
    this.autoresDisponibles = this.autoresDB.filter((item) => !this.nLibro.autores?.includes(item))  ;
  }

  ocultarNuevo(){ 
    this.nLibro= { isbn: 0,
          editoriales_id: 0,
          titulo: '',
          sinopsis: '',
          n_paginas: '' 
  }
    this.show = true;
  }


  editar(t : Libro){
    this.show = false
    this.nLibro= {
      isbn: t.isbn,
      editoriales_id: t.editoriales_id,
      titulo: t.titulo,
      sinopsis: t.sinopsis,
      n_paginas:  t.n_paginas,
      editorial:t.editorial,
      autores:t.autores }
let arrIdAutores:number[]= [] ; 
this.nLibro.autores?.forEach( aut =>arrIdAutores.push(aut.id) ) ;
console.log(arrIdAutores);
this.autoresDisponibles = []
  this.autoresDB.forEach((item) => { 
    if(!arrIdAutores.includes(item.id) ){this.autoresDisponibles.push(item);}
     

} )  ;




console.log("despues" , this.autoresDisponibles);
}



  eliminar(t : Libro){
    try { 
      this.librosService.delete(t.isbn).subscribe(
        {next: result =>{
             console.log(result);
             this.Libros = result.value
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
      if (this.nLibro.titulo == "" )  throw new Error ("el titulo no puede estar vacio") ;
      if (this.nLibro.sinopsis == "" ) throw new Error ("la sinopsis no puede estar vacio") ; 
      if (this.nLibro.n_paginas == "" ) throw new Error ("la n_paginas no puede estar vacio") ; 
       if( typeof(this.nLibro.autores) == 'undefined' ) throw new Error ("Debe seleccionar un autor") ; 
      if (this.nLibro.editoriales_id == 0 ) throw new Error ("Debe seleccionar la editorial") ; 
     
       this.Editoriales.forEach( (item:Editorial) =>{
                        if(item.id == this.nLibro.editoriales_id  ){  this.nLibro.editorial = item;  }

       })
      if (this.nLibro.isbn == 0 ){
      this.librosService.post(this.nLibro).subscribe(
        {next: result =>{
             console.log(result);
             this.Libros = result.value
             this.show = true;
        },
         error : err => {throw new Error (err)}
           }
      )
       }else{
        
      this.librosService.put(this.nLibro).subscribe(
        {next: result =>{
             console.log(result);
             this.Libros = result.value
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


}
