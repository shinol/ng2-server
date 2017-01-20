import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../models/chat.model';
import { Channel } from '../models/channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  subsParams: Subscription;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.chatService.getChannels();

    this.subsParams = this.route.params.subscribe(params => {
      const channelName = params['name'];
      this.chatService.getMessages(channelName);
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        // this.onSelectChannel(this.chatService.channel);
      }
    });

  }

  ngOnDestroy() {
    this.subsParams.unsubscribe();
  }

  onSendMessage(event) {
    this.chatService.sendMessage(event.channelId, event.messageContent);
  }

  onSelectChannel(channel: Channel) {
    this.chatService.selectChannel(channel);
    this.router.navigate(['/channel', channel.name]);
  }

}
