import {Component} from '@angular/core';



@Component ({
  selector: 'note-card',
  inputs: ['note'],
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})

export class NoteCard {
  note = {
  }
};
