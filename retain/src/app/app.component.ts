import { Component } from '@angular/core';

import { MainContainerComponent } from './containers/main-container/main';
import { FooterContainerComponent } from './containers/footer-container/footer-container';

@Component({
  selector: 'app-root',
  directives: [
    MainContainerComponent,
    FooterContainerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'You call yourself a dev?';
}
