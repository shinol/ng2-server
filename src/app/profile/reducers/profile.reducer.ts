import { ActionReducer, Action } from '@ngrx/store';

import { ProfileActions } from '../actions/profile.actions';

export interface ProfileState {
  _id: string,
  name: string
}

const initialState: ProfileState = {
  _id: '0',
  name: 'Jack'
};

export function profileReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ProfileActions.PROFILE_UPDATE_PROFILE_SUCCESS: {
      return Object.assign({}, state, { name: action.payload });
    }

    default: {
      return state;
    }
  }
};