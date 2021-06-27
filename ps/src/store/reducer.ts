import produce from 'immer';
import { products } from '../mock-objects/products';
import { ApplicationState, ApplicationAction } from './types';

export const initialState: ApplicationState = {
  loading: {
    user: false,
  },
  user: null,
  products: products,
  cartProducts: [],
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
    case "addProductToChart":
      return produce(state, draft => {
        draft.cartProducts = state.cartProducts.concat([action.product]);
      });
    case "removeProductToChart":
      return produce(state, draft => {
        // draft.cartProducts = state.cartProducts.filter((value) => value.id !== action.id);
        draft.cartProducts = [];
        let removed: boolean = false;
        state.cartProducts.forEach((product) => {
          if(!removed && product.id === action.id){
            removed = true;
          } else {
            draft.cartProducts.push(product);
          }
        });
      });
    default:
      return state;
  }
}

export default reducer;