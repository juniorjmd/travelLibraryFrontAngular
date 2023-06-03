import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, map } from 'rxjs';
import { Autor } from 'src/app/interfaces/autor';
import { Libro } from 'src/app/interfaces/libro';

@Injectable({  providedIn: 'root' })
export class AutoresService { 
  

  private apiUrl: string = 'http://localhost:5211/Autores'
  private apiUrlHasLibros: string = 'http://localhost:5211/AutoresHasLibros'

  constructor(private http: HttpClient ) { }

  getAll():Observable<Autor[]| null>{
    
    const url = `${ this.apiUrl }/GetAll`;
    console.log("url" , url);

    return this.http.get<Autor[]>( url )    ;
  }


  
  getLibrosAutor( id:number):Observable<Libro[]| null>{
    
    const url = `${ this.apiUrlHasLibros }/GetLibrosAutor?id=${id}`;
    console.log("url" , url);

    return this.http.get<Libro[]>( url   )    ;
  }


  post( autor : Autor){
    const url = `${ this.apiUrl }`;
    console.log("url" , url , "modelo" , autor );

    return this.http.post<{value : Autor[]}>( url ,  autor  )    ;
  }
  put( autor : Autor){
    const url = `${ this.apiUrl }`;
    console.log("url" , url , "modelo" , autor );
    return this.http.put<{value : Autor[]}>( url ,  autor  )    ;
  }
  delete( Id : number){ 
    const url = `${ this.apiUrl }?id=${Id} `;
    console.log("url" , url  ); 
    return this.http.delete<{value : Autor[]}>( url )    ; 
  }


}
