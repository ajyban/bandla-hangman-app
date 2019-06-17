import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

interface GameWordModel {
  id: number;
  value: string;
  given: boolean;
  answered?: boolean;
}

class GameWord {
  
  constructor(gameWordModel: GameWordModel) {

  }
}

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  private socket;
  constructor() {
    this.socket = io('http://localhost:3000');
  }
  userMsg;
  messages = [];
  currentWord = [];
  onSubmit(event) {
    event.preventDefault();
    this.socket.emit('chat message', this.userMsg);
    this.userMsg = '';

  }
  ngOnInit() {
    this.socket.on('chat message', (msg) => {
      this.messages.push(msg);
    });
    this.currentWord = [
      new GameWord({ id: 1, value: 'A', given: true, answered: false}),
      new GameWord({ id: 2, value: 'B', given: true, answered: false}),
      new GameWord({ id: 3, value: 'C', given: true, answered: false}),
      new GameWord({ id: 4, value: 'D', given: true, answered: false}),
      new GameWord({ id: 5, value: 'E', given: true, answered: false}),
    ]
  }

}
