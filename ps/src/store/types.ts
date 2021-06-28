import { Action } from 'redux';

// Login

export interface ProductModel {
  id: string;
  img: string;
  name: string;
  price: string;
  quantity: number;
  type: string;
  description: string;
}

export interface ProductOrder {
  id: string;
  name: string;
  price: string;
  quantity: number;
}

export interface Order {
  productsOrders: ProductOrder [];
  date: string;
  total: string;
  status: string;
}

export interface User {
  id: string;
  name: string;
  address: string;
  phoneNumber: string;
  email: string;
  password: string;
  role: string;
}

export interface LoadingState {
  user: boolean;
}

export interface ApplicationState {
  loading: LoadingState;
  user: User | null;
  products: ProductModel[];
  cartProducts: ProductModel[];
  usersList: User[];
  orders: Order[];
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

export interface AddProductToChart extends Action {
  type: 'addProductToChart';
  product: ProductModel;
}
export interface RemoveProductToChart extends Action {
  type: 'removeProductToChart';
  id: string;
}
export interface PlaceOrder extends Action {
  type: 'placeOrder';
  products: ProductModel[];
}

export interface ClearCart extends Action {
  type: 'clearCart';
}

export interface LogInUser extends Action {
  type: 'logInUser';
  user: User;
}

export interface AddInventory extends Action {
  type: 'addInventory';
  productId: string;
}

export interface RemoveInventory extends Action {
  type: 'removeInventory';
  productId: string;
}

export interface RemoveProduct extends Action {
  type: 'removeProduct';
  productId: string;
}

export interface SignUpUser extends Action {
  type: 'signUpUser';
  name: User["name"];
	address: User["address"];
  phoneNumber: User["phoneNumber"];
	email: User["email"];
  password: User["password"];
}

export type ApplicationAction = LoadUsersRequest | LoadUsersSuccess | LoadUsersError | AddProductToChart | RemoveProductToChart | LogInUser | SignUpUser | PlaceOrder | ClearCart | AddInventory | RemoveInventory | RemoveProduct;
