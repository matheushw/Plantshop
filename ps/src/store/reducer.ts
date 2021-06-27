import { createDraftSafeSelector } from '@reduxjs/toolkit';
import produce from 'immer';
import { products } from '../mock-objects/products';
import { ApplicationState, ApplicationAction, User } from './types';

export const initialState: ApplicationState = {
  loading: {
    user: false,
  },
  user: null,
  products: products,
  cartProducts: [],
  usersList: [],
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
        })
      });
    case "logInUser":
      return produce(state, draft => {
        const user: User = {
            email: action.email,
            password: action.password,
            name: '',
            address: '',
            phoneNumber: '',
        }
        draft.user = user;
        draft.usersList.push(draft.user); 
      });
    case "signUpUser":
      return produce(state, draft => {
        const user: User = {
            email: action.email,
            password: action.password,
            name: action.name,
            address: action.address,
            phoneNumber: action.phoneNumber,
        }
        draft.user = user;
        draft.usersList.push(draft.user); 
      });
    default:
      return state;
  }
}

export default reducer;