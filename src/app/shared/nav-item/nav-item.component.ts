import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'shared-navItem',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent { 

     @Input()imagen !:Menu ;
     
}
