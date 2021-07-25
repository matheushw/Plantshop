import produce, { enableMapSet } from 'immer';
import { mockedUsers } from '../mock-objects/usersList';
import { ApplicationState, initialPossibleState } from './types';
import { ApplicationAction } from './actions';
import { ActionTypes } from './actionTypes';

export const initialState: ApplicationState = {
  loading: initialPossibleState,
  error: initialPossibleState,
  success: initialPossibleState,
  user: null,
  products: [],
  cartProducts: new Map(),
  rentOrders: [],
  rentedProducts: [],
  usersList: mockedUsers,
  orders: [],
}

const reducer = (state = initialState, action: ApplicationAction) => {
  enableMapSet();
  
  switch (action.type) {
    case ActionTypes.LOAD_USER_REQUEST:
      return produce(state, draft => {
        draft.loading.user = true;
      });
    case ActionTypes.LOAD_USER_SUCCESS:
      return produce(state, draft => {
      draft.loading.user = false;
      draft.error.user = false;
      localStorage.setItem('@plantshop/email', action.user.email);
      localStorage.setItem('@plantshop/password', action.user.password);
      draft.user = action.user;
    });
    case ActionTypes.LOAD_USER_ERROR:
      return produce(state, draft => {
        draft.loading.user = false;
        draft.error.user = true;
      });
    case ActionTypes.LOAD_USER_RESET:
      return produce(state, draft => {
        draft.loading.user = false;
        draft.error.user = false;
      });
    case ActionTypes.LOAD_ALL_PRODUCTS_REQUEST:
      return produce(state, draft => {
        draft.loading.allProducts = true;
        draft.error.allProducts = false;
      });
      case ActionTypes.LOAD_ALL_PRODUCTS_SUCCESS:
        return produce(state, draft => {
        draft.loading.allProducts = false;
        draft.error.allProducts = false;
        draft.products = action.products;
      });
    case ActionTypes.LOAD_ALL_PRODUCTS_ERROR:
      return produce(state, draft => {
        draft.loading.allProducts = false;
        draft.error.allProducts = true;
      });
    case ActionTypes.ADD_PRODUCT_TO_CART_REQUEST:
      return produce(state, draft => {
        if(state.cartProducts.has(action.product.id)){
          const selectedProduct = state.cartProducts.get(action.product.id)!;
          draft.cartProducts.set(action.product.id, {...selectedProduct, quantity: selectedProduct.quantity + 1})
        } else {
          draft.cartProducts.set(action.product.id, action.product);
        }
      });
    case ActionTypes.REMOVE_PRODUCT_FROM_CART_RQUEST:
      return produce(state, draft => {
        if(state.cartProducts.has(action.id)){
          const selectedProduct = state.cartProducts.get(action.id)!;
          draft.cartProducts.delete(action.id);          
        }
      });
    case ActionTypes.PLACE_PURCHASE_ORDER_REQUEST:
      return produce(state, draft => {
        draft.loading.placePurchaseOrder = true;
        draft.error.placePurchaseOrder = false;
        draft.success.placePurchaseOrder = false;
      });
    case ActionTypes.PLACE_PURCHASE_ORDER_SUCCESS:
      return produce(state, draft => {
        draft.loading.placePurchaseOrder = false;
        draft.error.placePurchaseOrder = false;
        draft.success.placePurchaseOrder = true;
        draft.cartProducts = new Map();
      });
    case ActionTypes.PLACE_PURCHASE_ORDER_ERROR:
      return produce(state, draft => {
        draft.loading.placePurchaseOrder = false;
        draft.error.placePurchaseOrder = true;
        draft.success.placePurchaseOrder = false;
      });
    case ActionTypes.PLACE_PURCHASE_ORDER_NOT_ASKED:
      return produce(state, draft => {
        draft.loading.placePurchaseOrder = false;
        draft.error.placePurchaseOrder = false;
        draft.success.placePurchaseOrder = false;
      });
    case ActionTypes.CLEAR_PRODUCT_IN_CART_REQUEST:
      return produce(state, draft => {
        draft.cartProducts = new Map();
        draft.rentOrders = [];
      });
    case ActionTypes.REMOVE_RENT_ORDER_REQUEST:
      return produce(state, draft => {
        draft.rentOrders = [];
        state.rentOrders.forEach((order) => {
          if(order.orderId !== action.orderId) {
            draft.rentOrders.push(order);
          }
        });
      });
    case ActionTypes.SIGN_UP_USER_REQUEST:
      return produce(state, draft => {
        draft.loading.signUp = true;
      });
    case ActionTypes.SIGN_UP_USER_SUCCESS:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.success.signUp = true; 
      });
    case ActionTypes.SIGN_UP_USER_ERROR:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.error.signUp = true;
      });
    case ActionTypes.SIGN_UP_USER_RESET:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.error.signUp = false;
        draft.success.signUp = false;
      });
    case ActionTypes.ADD_INVENTORY_REQUEST:
      return produce(state, draft => {
        draft.loading.addInventory = true;
      });
    case ActionTypes.ADD_INVENTORY_SUCCESS:
      return produce(state, draft => {
        draft.loading.addInventory = false;
        draft.success.addInventory = true;
      });
    case ActionTypes.ADD_INVENTORY_ERROR:
      return produce(state, draft => {
        draft.loading.addInventory = false;
        draft.error.addInventory = true;
      });
    case ActionTypes.REMOVE_INVENTORY_REQUEST:
      return produce(state, draft => {
        draft.loading.removeInventory = true;
      });
    case ActionTypes.REMOVE_INVENTORY_SUCCESS:
      return produce(state, draft => {
        draft.loading.removeInventory = false;
        draft.success.removeInventory = true;
      });
    case ActionTypes.REMOVE_INVENTORY_ERROR:
      return produce(state, draft => {
        draft.loading.removeInventory = false;
        draft.error.removeInventory = true;
      });
    case ActionTypes.INVENTORY_RESET:
      return produce(state, draft => {
        draft.loading.removeInventory = false;
        draft.success.removeInventory = false;
        draft.error.removeInventory = false;
        draft.loading.addInventory = false;
        draft.success.addInventory = false;
        draft.error.addInventory = false;
        draft.loading.removeProduct = false;
        draft.error.removeProduct = false;
        draft.success.removeProduct = false;
      }); 
    case ActionTypes.RENT_PRODUCT_REQUEST:
      return produce(state, draft => {
        draft.rentOrders.push(action.rentOrder);
      });
    case ActionTypes.PLACE_RENT_ORDERS_REQUEST:
      return produce(state, draft => {
        draft.error.placeRentOrders = false;
        draft.success.placeRentOrders = false;
        draft.loading.placeRentOrders = true;
      });
    case ActionTypes.PLACE_RENT_ORDERS_SUCCESS:
      return produce(state, draft => {
        draft.error.placeRentOrders = false;
        draft.success.placeRentOrders = true;
        draft.loading.placeRentOrders = false;
        draft.rentOrders = [];
      });
    case ActionTypes.PLACE_RENT_ORDERS_ERROR:
      return produce(state, draft => {
        draft.error.placeRentOrders = true;
        draft.success.placeRentOrders = false;
        draft.loading.placeRentOrders = false;
      });
    case ActionTypes.LOAD_ALL_ORDERS_REQUEST:
      return produce(state, draft => {
        draft.error.loadAllOrders = false;
        draft.success.loadAllOrders = false;
        draft.loading.loadAllOrders = true;
      });
    case ActionTypes.LOAD_ALL_ORDERS_SUCCESS:
      return produce(state, draft => {
        draft.error.loadAllOrders = false;
        draft.success.loadAllOrders = true;
        draft.loading.loadAllOrders = false;
        draft.orders = action.purchaseOrders;
        draft.rentedProducts = action.rentOrders;
      });
    case ActionTypes.LOAD_ALL_ORDERS_ERROR:
      return produce(state, draft => {
        draft.error.loadAllOrders = true;
        draft.success.loadAllOrders = false;
        draft.loading.loadAllOrders = false;
      });
    case ActionTypes.REMOVE_PRODUCT_REQUEST:
      return produce(state, draft => {
        draft.loading.removeProduct = true;
    }); 
    case ActionTypes.REMOVE_PRODUCT_SUCCESS:
      return produce(state, draft => {
        draft.loading.removeProduct = false;
        draft.success.removeProduct = true;
    }); 
    case ActionTypes.REMOVE_PRODUCT_ERROR:
      return produce(state, draft => {
        draft.loading.removeProduct = false;
        draft.error.removeProduct = true;
    }); 
    case ActionTypes.EDIT_USER_REQUEST:
      return produce(state, draft => {
        draft.loading.editUser = true;
        draft.success.editUser = false;
        draft.error.editUser = false;
      });
    case ActionTypes.EDIT_USER_SUCCESS:
      return produce(state, draft => {
        draft.loading.editUser = false;
        draft.success.editUser = true;
      });
    case ActionTypes.EDIT_USER_ERROR:
      return produce(state, draft => {
        draft.loading.editUser = false;
        draft.error.editUser = true;
      });
    case ActionTypes.MINUS_PRODUCT_IN_CART_REQUEST:
      return produce(state, draft => {
        if(state.cartProducts.has(action.id)){
          const selectedProduct = state.cartProducts.get(action.id)!;
          if(selectedProduct.quantity === 1){
            draft.cartProducts.delete(action.id);
          }else if(selectedProduct.quantity > 1){
            draft.cartProducts.set(action.id, {...selectedProduct, quantity: selectedProduct.quantity - 1})
          }
        }
      });
    case ActionTypes.PLUS_PRODUCT_IN_CART_REQUEST:
      return produce(state, draft => {
        state.products.forEach(product => {
          if(state.cartProducts.has(action.id)){
            const selectedProduct = state.cartProducts.get(action.id)!;
            if(product.id === action.id && product.quantity - selectedProduct.quantity > 0){
              draft.cartProducts.set(action.id, {...selectedProduct, quantity: selectedProduct.quantity + 1})
            }
          }
        });
      });
    case ActionTypes.ADD_ADMIN_REQUEST:
      return produce(state, draft => {
        draft.loading.addAdmin = true;
      });
    case ActionTypes.ADD_ADMIN_SUCCESS:
      return produce(state, draft => {
        draft.loading.addAdmin = false;
        draft.success.addAdmin = true;
      });
    case ActionTypes.ADD_ADMIN_ERROR:
      return produce(state, draft => {
        draft.loading.addAdmin = false;
        draft.error.addAdmin = true;
      });
    case ActionTypes.ADD_ADMIN_RESET:
      return produce(state, draft => {
        draft.loading.addAdmin = false;
        draft.success.addAdmin = false;
        draft.error.addAdmin = false;
      });
    case ActionTypes.ADD_PRODUCT_REQUEST:
      return produce(state, draft => {
        draft.loading.addProduct = true;
      });
    case ActionTypes.ADD_PRODUCT_SUCCESS:
      return produce(state, draft => {
        draft.loading.addProduct = false;
        draft.success.addProduct = true;
      });
    case ActionTypes.ADD_PRODUCT_ERROR:
      return produce(state, draft => {
        draft.loading.addProduct = false;
        draft.error.addProduct = true;
      });
    case ActionTypes.ADD_PRODUCT_RESET:
      return produce(state, draft => {
        draft.loading.addProduct = false;
        draft.error.addProduct = false;
        draft.success.addProduct = false;
      });
    case ActionTypes.LOG_OUT_REQUEST:
      return produce(state, draft => {
        localStorage.removeItem('@plantshop/email');
        localStorage.removeItem('@plantshop/password');
        draft.loading.user = false;
        draft.error.user = false;
        draft.user = null;
      });
    default:
      return state;
  }
}

export default reducer;