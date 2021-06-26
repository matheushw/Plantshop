import produce from 'immer';
import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
  loading: {
    user: false,
  },
  user: null,
}

const reducer = (state = initialState, action: ApplicationAction) => {
  switch (action.type) {
    case "loadUsersRequest":
      return produce(state, draft => {
        draft.loading.user = true;
      });
    case "loadUsersSuccess":
      return produce(state, draft => {
        draft.loading.user = false;
        draft.user = action.user;
      });
    case "loadUsersError":
      return produce(state, draft => {
        draft.loading.user = false;
      });
    default:
      return state;
  }
}

export default reducer;