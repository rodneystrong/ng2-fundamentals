import {Component, Input} from '@angular/core';



@Component ({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.css']
})

export class NoteCard {
  @Input() noteprop = {
  };

  showCheck: boolean = false;

  toggle() {
    this.showCheck = !this.showCheck;
  }

  onChecked() {
    console.log('clicked!');
  }
};
