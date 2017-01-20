import { Component, OnInit } from '@angular/core';
import { Message } from '../models/chat.model';
import { Channel } from '../models/channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';




@Component({
  selector: 'my-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageForm: FormGroup;
  channelId: string = '0';

  constructor(
    private fb: FormBuilder, 
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.getChannels();
    this.chatService.getMessages('general');

    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  onSendMessage(event) {
    this.chatService.sendMessage(event.channelId, event.messageContent);
  }

  onSelectChannel(channel: Channel) {
    this.chatService.selectChannel(channel);
  }

}
