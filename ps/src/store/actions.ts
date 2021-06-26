import { User, LoadUsersRequest, LoadUsersSuccess, LoadUsersError } from './types';

export const loadUsersRequest = (): LoadUsersRequest => ({
  type: 'loadUsersRequest',
});

export const loadUsersSuccess = (user: User): LoadUsersSuccess => ({
  type: 'loadUsersSuccess',
  user,
});

export const loadUsersError = (): LoadUsersError => ({
  type: 'loadUsersError',
});