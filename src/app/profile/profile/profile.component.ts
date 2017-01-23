import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from '../../chat/models/state.model';
import { ProfileState } from '../reducers/profile.reducer';
import { ProfileActions } from '../actions/profile.actions';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileModel$: Observable<ProfileState>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {
    this.profileModel$ = this.store.select<ProfileState>('profile');
  }

  private onUpdateProfile(name: string) {
    console.log(name + "   -- onUpdateProfile -- ProfileComponent")
    this.store.dispatch({ type: ProfileActions.PROFILE_UPDATE_PROFILE, payload: name });
    window.history.back();
  }

}
