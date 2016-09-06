import { Component } from '@angular/core';

import { MainContainerComponent } from './containers/main';

@Component({
  selector: 'app-root',
  directives: [
    MainContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'You call yourself a dev?';
}
