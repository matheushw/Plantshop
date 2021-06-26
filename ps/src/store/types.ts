import { Action } from 'redux';

// Login

export interface User {
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
}

export interface LoadingState {
  user: boolean;
}

export interface ApplicationState {
  loading: LoadingState;
  user: User | null;
}

export interface LoadUsersRequest extends Action {
  type: 'loadUsersRequest';
}

export interface LoadUsersSuccess extends Action {
  type: 'loadUsersSuccess';
  user: User;
}

export interface LoadUsersError extends Action {
  type: 'loadUsersError';
}

export type ApplicationAction = LoadUsersRequest | LoadUsersSuccess | LoadUsersError;