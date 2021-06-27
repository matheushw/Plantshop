import { User, LoadUsersRequest, LogInUser, SignUpUser, LoadUsersSuccess, LoadUsersError, AddProductToChart, ProductModel, RemoveProductToChart, PlaceOrder, ClearCart } from './types';

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

export const addProductToChart = (product: ProductModel): AddProductToChart => ({
  type: 'addProductToChart',
  product,
});

export const removeProductToChart = (id: string): RemoveProductToChart => ({
  type: 'removeProductToChart',
  id,
});

export const placeOrder = (products: ProductModel[]): PlaceOrder => ({
  type: 'placeOrder',
  products,
});

export const clearCart = (): ClearCart => ({
  type: 'clearCart',
});

export const logInUser = (user: User): LogInUser => ({
  type: 'logInUser',
  user
});

export const signUpUser = (
	name: User["name"], 
	address: User["address"],
	phoneNumber: User["phoneNumber"], 
	email: User["email"], 
	password: User["password"]
): SignUpUser => ({
	type: 'signUpUser',
	name,
	address,
	phoneNumber,
	email,
	password
});