import { Routes } from '@angular/router';

import { ChatComponent } from '../chat/chat/chat.component';

export const routes: Routes = [
    {
        path: 'channel',
        component: ChatComponent
    },
    {
        path: '**',
        redirectTo: 'channel'
    }
];