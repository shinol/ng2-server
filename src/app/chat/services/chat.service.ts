import { Injectable } from '@angular/core';

import { Message } from '../models/chat.model';
import { Channel } from '../models/channel.model';

@Injectable()
export class ChatService {

  // fake db
  private channelsDb: Channel[] = [
    { _id: '0', name: 'general' },
    { _id: '1', name: 'channel1' }
  ];

  // other fake db
  private messageDb: Message[] = [
    { _id: '0', channelId: '0', userId: '0', userName: 'Barbie', content: 'Hello', timestamp: new Date() },
    { _id: '1', channelId: '0', userId: '1', userName: 'James', content: 'Hi', timestamp: new Date() },
    { _id: '2', channelId: '1', userId: '0', userName: 'Barbie', content: 'Hi again!', timestamp: new Date() }
  ];

  channels: Channel[] = [];
  messages: Message[] = [];

  channel: Channel;

  constructor() { }

  getChannels(): void {
    // fake API, get channel data from db
    this.channels = this.channelsDb;
    this.channel = this.channels[0];
  }

  getMessages(channelName: string): void {
    // fake API
    let channelId = '';
    this.channelsDb.map(channel => {
      if (channel.name === channelName) {
        channelId = channel._id;
      }
    });

    const messages = [];
    this.messageDb.map(message => {
      if (message.channelId === channelId) {
        messages.push(message);
      }
    });

    this.messages = messages;
  }

  selectChannel(channel: Channel) {
    this.channel = channel;
    this.getMessages(channel.name);
  }

  sendMessage(channelId: string, messageContent: string): void {
    const message = {
      _id: String(this.messageDb.length),
      channelId,
      userId: '0',
      userName: 'Jack',
      content: messageContent,
      timestamp: new Date()
    };

    this.messages = [...this.messages, message];

    // fake API, write message data to the database
    this.messageDb = [...this.messageDb, message];
  }


}
