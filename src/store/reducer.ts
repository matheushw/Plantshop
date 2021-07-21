import produce, { enableMapSet } from 'immer';
import { mockedUsers } from '../mock-objects/usersList';
import { products } from '../mock-objects/products';
import { ApplicationState, User, Order, ProductOrder, ProductModel } from './types';
import { ApplicationAction } from './actions';
import { ActionTypes } from './actionTypes';

export const initialState: ApplicationState = {
  loading: {
    user: false,
    allProducts: false,
    signUp: false
  },
  error: {
    user: false,
    allProducts: false,
    signUp: false
  },
  success: {
    signUp: false
  },
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
    // case "addProductToChart":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     if(state.cartProducts.has(action.product.id)){
    //       const selectedProduct = state.cartProducts.get(action.product.id)!;
    //       draft.cartProducts.set(action.product.id, {...selectedProduct, quantity: selectedProduct.quantity + 1})
    //     } else {
    //       draft.cartProducts.set(action.product.id, action.product);
    //     }
    //   });
    // case "removeProductToChart":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     if(state.cartProducts.has(action.id)){
    //       const selectedProduct = state.cartProducts.get(action.id)!;
    //       if(selectedProduct.quantity === 1) {
    //         draft.cartProducts.delete(action.id);
    //       } else {
    //         draft.cartProducts.set(action.id, {...selectedProduct, quantity: selectedProduct.quantity - 1})
    //       }
    //     }
    //   });
    // case "placeOrder":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     if(state.cartProducts.size !== 0){
    //       let totalPrice: number = 0;
    //       let productsOrders: ProductOrder[] = [];
          
    //       state.cartProducts.forEach((product) => {
    //         totalPrice += parseFloat(product.price) * product.quantity;

    //         const newProductOrder: ProductOrder = {
    //           id: product.id, 
    //           name: product.name, 
    //           price: product.price, 
    //           quantity: product.quantity
    //         }

    //         draft.products.forEach((value, idx) => {
    //           if(value.id === product.id){
    //             draft.products[idx].quantity -= product.quantity;
    //           }
    //         })

    //         productsOrders.push(newProductOrder);
    //       });
          
    //       var day = new Date();
    //       var dd = day.getDate().toString();
    //       var mm = (day.getMonth()+1).toString();
    //       var yyyy = (day.getFullYear()).toString();
    //       if(parseInt(dd) < 10){
    //         dd = '0' + dd;
    //       } 
    //       if(parseInt(mm)<10){
    //         mm = '0' + mm;
    //       } 

    //       const newOrder: Order = {
    //         productsOrders: productsOrders,
    //         date: dd + "/" + mm + "/" + yyyy,
    //         total: totalPrice.toFixed(2),
    //         status: "Preparando para envio!",
    //       }

    //       draft.orders = state.orders;
    //       draft.orders.push(newOrder);
    //     }

    //     if(state.rentOrders.length !== 0) {
    //       draft.rentedProducts = draft.rentedProducts.concat(draft.rentOrders);
    //     }
    //   });
    // case "clearCart":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     draft.cartProducts = new Map();
    //     draft.rentOrders = [];
    //   });
    // case "removeRentOrder":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     draft.rentOrders = [];
    //     state.rentOrders.forEach((order) => {
    //       if(order.orderId !== action.orderId) {
    //         draft.rentOrders.push(order);
    //       }
    //     });
    //   });
    // case "logInUser":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     draft.user = action.user;
    //   });
    case ActionTypes.SIGN_UP_USER_REQUEST:
      return produce(state, draft => {
        draft.loading.signUp = true;
        draft.error.signUp = false;
        draft.success.signUp = false;
      });
    case ActionTypes.SIGN_UP_USER_SUCCESS:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.error.signUp = false;
        draft.success.signUp = true; 
      });
    case ActionTypes.SIGN_UP_USER_ERROR:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.error.signUp = true;
        draft.success.signUp = false;
      });
    case ActionTypes.SIGN_UP_USER_RESET:
      return produce(state, draft => {
        draft.loading.signUp = false;
        draft.error.signUp = false;
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
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     draft.rentOrders.push(action.rentOrder);
    //   });
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
    // case "minusProductInCart":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     if(state.cartProducts.has(action.id)){
    //       const selectedProduct = state.cartProducts.get(action.id)!;
    //       if(selectedProduct.quantity === 1){
    //         draft.cartProducts.delete(action.id);
    //       }else if(selectedProduct.quantity > 1){
    //         draft.cartProducts.set(action.id, {...selectedProduct, quantity: selectedProduct.quantity - 1})
    //       }
    //     }
    //   });
    // case "plusProductInCart":
    // case ActionTypes.:
    //   return produce(state, draft => {
    //     state.products.forEach(product => {
    //       if(state.cartProducts.has(action.id)){
    //         const selectedProduct = state.cartProducts.get(action.id)!;
    //         if(product.id === action.id && product.quantity - selectedProduct.quantity > 0){
    //           draft.cartProducts.set(action.id, {...selectedProduct, quantity: selectedProduct.quantity + 1})
    //         }
    //       }
    //     });
    //   });
    case ActionTypes.LOG_OUT_REQUEST:
      return produce(state, draft => {
        draft.loading.user = false;
        draft.error.user = false;
        draft.user = null;
      });
  //  case ActionTypes.LOG_OUT_SUCCESS:
  //    return produce(state, draft => {
  //      draft.loading.logOut = false;
  //      draft.success.logOut = true;
  //      draft.user = null;
  //    });
  //  case ActionTypes.LOG_OUT_ERROR:
  //    return produce(state, draft => {
  //      draft.loading.logOut = false;
  //      draft.error.logOut = true;
  //    });
  //  case ActionTypes.LOG_OUT_RESET:
  //    return produce(state, draft => {
  //      draft.loading.logOut = false;
  //      draft.success.logOut = false;
  //      draft.error.logOut = false;
  //    })
    default:
      return state;
  }
}

export default reducer;