import produce, { enableMapSet } from 'immer';
import { mockedUsers } from '../mock-objects/usersList';
import { products } from '../mock-objects/products';
import { ApplicationState, ApplicationAction, User, Order, ProductOrder, ProductModel } from './types';

export const initialState: ApplicationState = {
  loading: {
    user: false,
  },
  user: null,
  products: products,
  cartProducts: new Map(),
  rentOrders: [],
  rentedProducts: [],
  usersList: mockedUsers,
  orders: [],
}

const reducer = (state = initialState, action: ApplicationAction) => {
  enableMapSet();
  
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
        if(state.cartProducts.has(action.product.id)){
          const selectedProduct = state.cartProducts.get(action.product.id)!;
          draft.cartProducts.set(action.product.id, {...selectedProduct, quantity: selectedProduct.quantity + 1})
        } else {
          draft.cartProducts.set(action.product.id, action.product);
        }
      });
    case "removeProductToChart":
      return produce(state, draft => {
        if(state.cartProducts.has(action.id)){
          const selectedProduct = state.cartProducts.get(action.id)!;
          if(selectedProduct.quantity === 1) {
            draft.cartProducts.delete(action.id);
          } else {
            draft.cartProducts.set(action.id, {...selectedProduct, quantity: selectedProduct.quantity - 1})
          }
        }
      });
    case "placeOrder":
      return produce(state, draft => {
        if(state.cartProducts.size !== 0){
          let totalPrice: number = 0;
          let productsOrders: ProductOrder[] = [];
          
          state.cartProducts.forEach((product) => {
            totalPrice += parseFloat(product.price) * product.quantity;

            const newProductOrder: ProductOrder = {
              id: product.id, 
              name: product.name, 
              price: product.price, 
              quantity: product.quantity
            }

            draft.products.forEach((value, idx) => {
              if(value.id === product.id){
                draft.products[idx].quantity -= product.quantity;
              }
            })

            productsOrders.push(newProductOrder);
          });
          
          var day = new Date();
          var dd = day.getDate().toString();
          var mm = (day.getMonth()+1).toString();
          var yyyy = (day.getFullYear()).toString();
          if(parseInt(dd) < 10){
            dd = '0' + dd;
          } 
          if(parseInt(mm)<10){
            mm = '0' + mm;
          } 

          const newOrder: Order = {
            productsOrders: productsOrders,
            date: dd + "/" + mm + "/" + yyyy,
            total: totalPrice.toFixed(2),
            status: "Preparando para envio!",
          }

          draft.orders = state.orders;
          draft.orders.push(newOrder);
        }

        if(state.rentOrders.length !== 0) {
          draft.rentedProducts = draft.rentedProducts.concat(draft.rentOrders);
        }
      });
    case "clearCart":
      return produce(state, draft => {
        draft.cartProducts = new Map();
        draft.rentOrders = [];
      });
    case "removeRentOrder":
      return produce(state, draft => {
        draft.rentOrders = [];
        state.rentOrders.forEach((order) => {
          if(order.orderId !== action.orderId) {
            draft.rentOrders.push(order);
          }
        });
      });
    case "logInUser":
      return produce(state, draft => {
        draft.user = action.user;
      });
    case "signUpUser":
      return produce(state, draft => {
        const user: User = {
            id: (state.usersList.length).toString(),
            email: action.email,
            password: action.password,
            name: action.name,
            address: action.address,
            phoneNumber: action.phoneNumber,
            role: 'user',
        }
        draft.user = user;
        draft.usersList.push(draft.user); 
      });
    case "addInventory":
      return produce(state, draft => {
        draft.products.forEach((product, index) => {
          if(product.id === action.productId){
            draft.products[index].quantity++;
          }
        })
      });

    case "removeInventory":
      return produce(state, draft => {
        draft.products.forEach((product, index) => {
          if(product.id === action.productId){
            draft.products[index].quantity--;
          }
        })
      });
    case "rentProduct":
      return produce(state, draft => {
        draft.rentOrders.push(action.rentOrder);
      });
    case "removeProduct":
      const newProductsArray: ProductModel[] = [];
      return produce(state, draft => {
        draft.products.forEach((product, index) => {
          if(product.id !== action.productId){
            newProductsArray.push(product);
          }
        })

        draft.products = newProductsArray;
      });
      
    case "editUser":
      return produce(state, draft => {
        draft.usersList = [];
        let edited: boolean = false;
        state.usersList.forEach((user) => {
          if(!edited && user.id === action.id){
            const newUser: User = {
              id: action.id,
              email: action.email,
              password: user.password,
              name: action.name,
              address: action.address,
              phoneNumber: action.phoneNumber,
              role: user.role,
            }
            edited = true;
            draft.user = newUser;
            draft.usersList.push(newUser);
            
          } else {
            draft.usersList.push(user);
          }
        });
      });
    case "addAdmin":
        return produce(state, draft => {
          const admin: User = {
              id: (state.usersList.length).toString(),
              email: action.email,
              password: action.password,
              name: action.name,
              address: action.address,
              phoneNumber: action.phoneNumber,
              role: 'admin',
          }
          draft.usersList.push(admin); 
        });
    case "registerProduct":
      return produce(state, draft => {
        const product: ProductModel = {
          id: (state.products.length+1).toString(),
          img: action.img,
          name: action.name,
          price: action.price,
          quantity: action.quantity,
          type: action.category,
          description: action.description,
        }
        draft.products.push(product);
      });
    default:
      return state;
  }
}

export default reducer;