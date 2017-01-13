import { Component, OnInit } from '@angular/core';
import { Message } from '../models/chat.model';
import { Channel } from '../models/channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'my-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageForm: FormGroup;
  channelId: string = '0';

  messages: Message[] = [
    {_id: '0', channelId: '0', userId: '0', userName: 'Jill', content: 'Hello', timestamp: new Date()},
    {_id: '1', channelId: '0', userId: '1', userName: 'Jack', content: 'Hi there!', timestamp: new Date()},
    {_id: '2', channelId: '0', userId: '2', userName: 'Jack', content: 'Hi Jill!', timestamp: new Date()},
  ];

  channels: Channel[] = [
    {_id: '0', name: 'general'},
    {_id: '1', name: 'goose'},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  onSendMessage() {
    if (!this.messageForm.valid) return ;

    const message = {
      _id: String(this.messages.length),
      channelId: '0',
      userId: '1',
      userName: 'Jack',
      content: this.messageForm.value.message,
      timestamp: new Date()
    }

    this.messages.push(message);
    this.messageForm.reset();
  }

onSelectChannel(channel: Channel) {
  this.channelId = channel._id;
}

}
