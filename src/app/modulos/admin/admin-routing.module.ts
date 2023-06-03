import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: AdminComponent ,
         children:[
          { path: '', component: HomeComponent },
          { path: 'libros', component: LibrosComponent },
          { path: 'autores', component: AutoresComponent },
          { path: 'editoriales', component: EditorialesComponent },
          { path : '**' , pathMatch:'full' , redirectTo : ''}
        ]
        },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
