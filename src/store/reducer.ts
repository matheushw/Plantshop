import produce, { enableMapSet } from 'immer';
import { mockedUsers } from '../mock-objects/usersList';
import { products } from '../mock-objects/products';
import { ApplicationState, User, Order, ProductOrder, ProductModel, initialPossibleState } from './types';
import { ApplicationAction } from './actions';
import { ActionTypes } from './actionTypes';
import { loadUsersLocalStorage, loadUsersRequest } from './actionCreators';

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
        draft.error.user = false;
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
    case ActionTypes.SING_UP_USER_REQUEST:
      return produce(state, draft => {
        draft.loading.signUp = true;
        draft.error.signUp = false;
        draft.success.signUp = false;
      });
    case ActionTypes.SING_UP_USER_SUCCESS:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.error.signUp = false;
        draft.success.signUp = true; 
      });
    case ActionTypes.SING_UP_USER_ERROR:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.error.signUp = true;
        draft.success.signUp = false;
      });
    // case "addInventory":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     draft.products.forEach((product, index) => {
    //       if(product.id === action.productId){
    //         draft.products[index].quantity++;
    //       }
    //     })
    //   });

    // case "removeInventory":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     draft.products.forEach((product, index) => {
    //       if(product.id === action.productId){
    //         draft.products[index].quantity--;
    //       }
    //     })
    //   });
    // case "rentProduct":
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
    // case "removeProduct":
    // case ActionTypes.:
    //   const newProductsArray: ProductModel[] = [];
    //   return produce(state, draft => {
    //     draft.products.forEach((product, index) => {
    //       if(product.id !== action.productId){
    //         newProductsArray.push(product);
    //       }
    //     })

    //     draft.products = newProductsArray;
    //   });
      
    // case "editUser":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     draft.usersList = [];
    //     let edited: boolean = false;
    //     state.usersList.forEach((user) => {
    //       if(!edited && user.id === action.id){
    //         const newUser: User = {
    //           id: action.id,
    //           email: action.email,
    //           password: user.password,
    //           name: action.name,
    //           address: action.address,
    //           phoneNumber: action.phoneNumber,
    //           role: user.role,
    //         }
    //         edited = true;
    //         draft.user = newUser;
    //         draft.usersList.push(newUser);
            
    //       } else {
    //         draft.usersList.push(user);
    //       }
    //     });
    //   });
    // case "addAdmin":
    // case ActionTypes.:
    //     return produce(state, draft => {
    //       const admin: User = {
    //           id: (state.usersList.length).toString(),
    //           email: action.email,
    //           password: action.password,
    //           name: action.name,
    //           address: action.address,
    //           phoneNumber: action.phoneNumber,
    //           role: 'admin',
    //       }
    //       draft.usersList.push(admin); 
    //     });
    // case "registerProduct":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     const product: ProductModel = {
    //       id: (state.products.length+1).toString(),
    //       img: action.img,
    //       name: action.name,
    //       price: action.price,
    //       quantity: action.quantity,
    //       type: action.category,
    //       description: action.description,
    //     }
    //     draft.products.push(product);
    //   });
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
    // case ActionTypes.LOG_OUT_REQUEST:
    //   return produce(state, draft => {
    //     draft.loading = true;
    //     draft.user = null;
    //   });
    // case ActionTypes.LOG_OUT_SUCCESS:
    //   return produce(state, draft => {
    //     draft.loading = false;
    //     draft.user = null;
    //   });
    // case ActionTypes.LOG_OUT_ERROR:
    //   return produce(state, draft => {
    //     draft.loading = false;
    //     draft.error = true;
    //     draft.user = null;
    //   });
    default:
      return state;
  }
}

export default reducer;