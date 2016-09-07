import {Component, Input} from '@angular/core';



@Component ({
  selector: 'note-card',
  // here you're using the built-in 'inputs' property
  // to create a custom attribute called 'note'.
  // you'll use this on your notes-container using
  // this syntax [note]
  inputs: ['noteprop'],
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})

export class NoteCard {
  noteprop = {
  }
};
