import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { NavItemComponent } from 'src/app/shared/nav-item/nav-item.component';
import { LibrosPorAutorComponent } from './libros-por-autor/libros-por-autor.component';
import { LibrosPorEditorialComponent } from './libros-por-editorial/libros-por-editorial.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AdminComponent,
    AutoresComponent,
    LibrosComponent,
    EditorialesComponent,
    NavItemComponent,
    LibrosPorAutorComponent,
    LibrosPorEditorialComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, 
    AdminRoutingModule,FormsModule
  ]
})
export class AdminModule { }
