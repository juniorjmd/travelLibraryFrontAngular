import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: ClientComponent ,children : [
  { path: '', component: HomeComponent },
     { path : '**' , pathMatch:'full' , redirectTo : ''}

]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
