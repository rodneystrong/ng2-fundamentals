import { Component } from '@angular/core';

import { AppBar } from '../../ui/app-bar';

import { NotesContainer } from '../notes-container/notes-container';


@Component({
  selector: 'main-container',
  directives: [
    AppBar,
    NotesContainer
  ],
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent {

}
