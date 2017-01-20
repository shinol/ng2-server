import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'my-chat-area-bottom',
  templateUrl: './chat-area-bottom.component.html',
  styleUrls: ['./chat-area-bottom.component.css']
})
export class ChatAreaBottomComponent implements OnInit {
  @Input() channelId: string;
  @Output() sendMessage = new EventEmitter<any>();

  messageForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  onSendMessage() {
    if (!this.messageForm.valid) return;

    this.sendMessage.emit({
      channelId: this.channelId, messageContent: this.messageForm.value.message
    });

    this.messageForm.reset();
  }

}
