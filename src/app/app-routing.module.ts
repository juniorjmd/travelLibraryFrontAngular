import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path: 'admin', loadChildren: () => import('./modulos/admin/admin.module').then(m => m.AdminModule) },
   { path: 'home', loadChildren: () => import('./modulos/client/client.module').then(m => m.ClientModule) },
{ path : '**' , pathMatch:'full' , redirectTo : 'home'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
