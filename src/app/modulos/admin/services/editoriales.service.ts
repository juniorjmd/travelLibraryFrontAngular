import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from 'src/app/interfaces/editorial';
import { Libro } from 'src/app/interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {

  
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  optHeader = { headers: this.headers };
  

  private apiUrl: string = 'http://localhost:5211/Editoriales' 

  constructor(private http: HttpClient ) { }
  getAll():Observable<Editorial[]| null>{
    const url = `${ this.apiUrl }/GetAll`;
    console.log("url" , url);
    return this.http.get<Editorial[]>( url )    ;
  }
  getLibrosEditorial( id:number):Observable<Libro[]| null>{
    const url = `${ this.apiUrl }/GetLibrosEditorial?idEditorial=${id}`;
    console.log("url" , url);

    return this.http.get<Libro[]>( url   )    ;
  }
  postNuevaEditoria( editorial : Editorial){
    const url = `${ this.apiUrl }`;
    console.log("url" , url , "modelo" , editorial );

    return this.http.post<{value : Editorial[]}>( url ,  editorial  )    ;
  }
  putEditoria( editorial : Editorial){
    const url = `${ this.apiUrl }`;
    console.log("url" , url , "modelo" , editorial );
    return this.http.put<{value : Editorial[]}>( url ,  editorial  )    ;
  }
  deleteEditorial( Id : number){ 
    const url = `${ this.apiUrl }?id=${Id} `;
    console.log("url" , url  ); 
    return this.http.delete<{value : Editorial[]}>( url )    ; 
  }
}