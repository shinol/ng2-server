import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat/chat.component';
import { CalendarPipe } from './pipes/calendar.pipe';
import { ChatService } from './chat/services/chat.service';
import { ChatAreaBottomComponent } from './chat/chat-area-bottom/chat-area-bottom.component';
import { ChannelListComponent } from './chat/channel-list/channel-list.component';
import { ChatAreaDialogComponent } from './chat/chat-area-dialog/chat-area-dialog.component';
import { routes } from './routes/app.routes';
import { ChannelHeaderComponent } from './chat/channel-header/channel-header.component';



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarPipe,
    ChatAreaBottomComponent,
    ChannelListComponent,
    ChatAreaDialogComponent,
    ChannelHeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
