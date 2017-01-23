import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../models/chat.model';
import { Channel } from '../models/channel.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';

import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../models/state.model';
import { ProfileState } from '../../profile/reducers/profile.reducer';


@Component({
  selector: 'my-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  profileModel$: Observable<ProfileState>;
  subsParams: Subscription;

  constructor(
    private chatService: ChatService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.profileModel$ = this.store.select<ProfileState>('profile');

    this.chatService.getChannels();

    this.subsParams = this.route.params.subscribe(params => {
      const channelName = params['name'];
      this.chatService.getMessages(channelName);
    });
  }

  ngOnDestroy() {
    this.subsParams.unsubscribe();
  }

  onGoProfile() {
    this.router.navigate(['/profile']);
  }

  onSendMessage(event) {
    this.chatService.sendMessage(event.channelId, event.messageContent);
  }

  onSelectChannel(channel: Channel) {
    this.chatService.selectChannel(channel);
    this.router.navigate(['/channel', channel.name]);
  }

  onAddChannel(event) {
    this.chatService.addChannel(event);
  }

}
