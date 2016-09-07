import { Component } from '@angular/core';

import {NoteCard} from '../../ui/notes/note-card';

@Component ({
  selector: 'notes-container',
  directives: [
    NoteCard
  ],
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css']
})

export class NotesContainer {
  noteObj = {
    title: 'new note title',
    value: 'note value'
  }
};
