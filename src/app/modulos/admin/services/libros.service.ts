import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from 'src/app/interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {  
  private apiUrl: string = 'http://localhost:5211/Libros' 

  constructor(private http: HttpClient ) { }

  getAll():Observable<Libro[]| null>{
    const url = `${ this.apiUrl }/GetAll`;
    console.log("url" , url);
    return this.http.get<Libro[]>( url )    ;
  }  
  post( autor : Libro){
    const url = `${ this.apiUrl }`;
    console.log("url" , url , "modelo" , autor );
    return this.http.post<{value : Libro[]}>( url ,  autor  )    ;
  }
  put( autor : Libro){
    const url = `${ this.apiUrl }`;
    console.log("url" , url , "modelo" , autor );
    return this.http.put<{value : Libro[]}>( url ,  autor  )    ;
  }
  delete( Id : number){ 
    const url = `${ this.apiUrl }?id=${Id} `;
    console.log("url" , url  ); 
    return this.http.delete<{value : Libro[]}>( url )    ; 
  }
 
   

  
}
