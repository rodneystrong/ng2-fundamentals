import {Component, Input} from '@angular/core';



@Component ({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})

export class NoteCard {
  @Input() noteprop = {
  }

  onChecked() {
    console.log('clicked!');
  }
};
