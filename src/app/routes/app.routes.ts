import { Routes } from '@angular/router';

import { ChatComponent } from '../chat/chat/chat.component';
import { ProfileComponent } from '../profile/profile/profile.component';


export const routes: Routes = [
    {
        path: 'channel/:name',
        component: ChatComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },    
    {
        path: '**',
        redirectTo: 'channel/general'
    }
];