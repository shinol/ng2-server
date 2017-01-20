import { Component, 
  OnInit, 
  Input, 
  Output, 
  EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'my-channel-header',
  templateUrl: './channel-header.component.html',
  styleUrls: ['./channel-header.component.css']
})
export class ChannelHeaderComponent implements OnInit {

  @Input() name: string;
  @Output() goProfile = new EventEmitter<void>();

  private onGoProfile() {
    this.goProfile.emit(null);
  }
  constructor() { }

  ngOnInit() {
  }

}
