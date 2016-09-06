import { Component } from '@angular/core';

import { AppBar } from '../../ui/app-bar';


@Component({
  selector: 'main-container',
  directives: [
    AppBar
  ],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent {

}
