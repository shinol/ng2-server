import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Channel } from '../models/channel.model';


@Component({
  selector: 'my-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  @Input() channels: Channel[];
  @Input() channelId: string;
  @Output() selectChannel = new EventEmitter<Channel>()

  constructor() { }  

  ngOnInit() {
  }

  onSelectChannel(channel: Channel) {
    this.selectChannel.emit(channel);
  }

}
