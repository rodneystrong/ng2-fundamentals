import {Component} from '@angular/core';



@Component ({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})

export class NoteCard {
  note = {
    title: 'clean note title',
    value: 'check it value'
  }
};
