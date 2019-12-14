import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  private socket;
  constructor() {
    this.socket = io();
   }
  userMsg;
  messages = [];
  onSubmit(event){
    event.preventDefault();
    this.socket.emit('chat message', this.userMsg);
    this.userMsg = '';

  }
  ngOnInit() {    
    this.socket.on('chat message', (msg)=> {
      this.messages.push(msg);        
    });
  }

}
