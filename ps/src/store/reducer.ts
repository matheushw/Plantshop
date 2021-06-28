import produce from 'immer';
import { mockedUsers } from '../mock-objects/usersList';
import { products } from '../mock-objects/products';
import { ApplicationState, ApplicationAction, User, Order, ProductOrder, ProductModel } from './types';

export const initialState: ApplicationState = {
  loading: {
    user: false,
  },
  user: null,
  products: products,
  cartProducts: [],
  usersList: mockedUsers,
  orders: [],
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
    case "placeOrder":
      return produce(state, draft => {

        const date = new Date();
        let totalPrice: number = 0;
        let products: Map<string, ProductOrder> = new Map<string, ProductOrder>();

        action.products.forEach((product) => {
          totalPrice += parseFloat(product.price);

          if (products.has(product.id)){
            const auxProduct = products.get(product.id)!;
            products.set(product.id, {...auxProduct, quantity: auxProduct.quantity + 1});
          } else {
            const newProductOrder: ProductOrder = {
              id: product.id, 
              name: product.name, 
              price: product.price, 
              quantity: 1 
            };
            products.set(product.id, newProductOrder);
          }

        });

        let productsOrders: ProductOrder[] = [];

        products.forEach((productOrder) => productsOrders.push(productOrder));
        
        const newOrder: Order ={
          productsOrders: productsOrders,
          date: date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear(),
          total: totalPrice.toFixed(2),
          status: "Preparando para envio!",
        }
        draft.orders = state.orders;
        draft.orders.push(newOrder);
      });
    case "clearCart":
      return produce(state, draft => {
        draft.cartProducts = [];
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
    default:
      return state;
  }
}

export default reducer;