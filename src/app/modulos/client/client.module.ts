import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { HomeComponent } from './home/home.component';
import { TabsLibroComponent } from './tabs-libro/tabs-libro.component';


@NgModule({
  declarations: [
    ClientComponent,
    HomeComponent,
    TabsLibroComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
