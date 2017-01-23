import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ProfileService } from './chat/services/profile.service';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat/chat.component';
import { CalendarPipe } from './pipes/calendar.pipe';
import { ChatService } from './chat/services/chat.service';
import { ChatAreaBottomComponent } from './chat/chat-area-bottom/chat-area-bottom.component';
import { ChannelListComponent } from './chat/channel-list/channel-list.component';
import { ChatAreaDialogComponent } from './chat/chat-area-dialog/chat-area-dialog.component';
import { routes } from './routes/app.routes';
import { ChannelHeaderComponent } from './chat/channel-header/channel-header.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { InfoComponent } from './profile/info/info.component';
import { ChatAreaHeaderComponent } from './chat/chat-area-header/chat-area-header.component';
import { ChannelAddComponent } from './chat/channel-add/channel-add.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { profileReducer } from './profile/reducers/profile.reducer';
import { ProfileEffects } from './profile/effects/profile.effects';



@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    CalendarPipe,
    ChatAreaBottomComponent,
    ChannelListComponent,
    ChatAreaDialogComponent,
    ChannelHeaderComponent,
    ProfileComponent,
    InfoComponent,
    ChatAreaHeaderComponent,
    ChannelAddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    StoreModule.provideStore({ profile: profileReducer }),
    EffectsModule.run(ProfileEffects),
    HttpModule
  ],
  providers: [ChatService, ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
