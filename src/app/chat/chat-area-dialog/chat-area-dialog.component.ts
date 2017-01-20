import { Component, 
  OnInit, 
  Input, 
  ChangeDetectionStrategy } from '@angular/core';

import { Message } from '../models/chat.model';


@Component({
  selector: 'my-chat-area-dialog',
  templateUrl: './chat-area-dialog.component.html',
  styleUrls: ['./chat-area-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatAreaDialogComponent implements OnInit {
  @Input() messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}
