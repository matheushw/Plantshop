import { User, LoadUsersRequest, LogInUser, SignUpUser, EditUser, LoadUsersSuccess, LoadUsersError, AddProductToChart, ProductModel, RemoveProductToChart, PlaceOrder, ClearCart, AddInventory, RemoveInventory, RemoveProduct, AddAdmin, RegisterProduct, RentProduct, RentOrder, RemoveRentOrder } from './types';

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

export const placeOrder = (): PlaceOrder => ({
  type: 'placeOrder',
});

export const clearCart = (): ClearCart => ({
  type: 'clearCart',
});

export const removeRentOrder = (orderId: number): RemoveRentOrder => ({
  type: 'removeRentOrder',
	orderId,
});

export const logInUser = (user: User): LogInUser => ({
  type: 'logInUser',
  user
});

export const addInventory = (productId: string): AddInventory => ({
  type: 'addInventory',
  productId
});

export const removeInventory = (productId: string): RemoveInventory => ({
  type: 'removeInventory',
  productId
});

export const removeProduct = (productId: string): RemoveProduct => ({
  type: 'removeProduct',
  productId
});

export const rentProduct = (rentOrder: RentOrder): RentProduct => ({
  type: 'rentProduct',
  rentOrder
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

export const editUser = (
	name: User["name"], 
	address: User["address"],
	phoneNumber: User["phoneNumber"], 
	email: User["email"], 
  id: User["id"]
): EditUser => ({
	type: 'editUser',
	name,
	address,
	phoneNumber,
	email,
  id
});

export const addAdmin = (
	name: User["name"], 
	address: User["address"],
	phoneNumber: User["phoneNumber"], 
	email: User["email"], 
	password: User["password"]
): AddAdmin => ({
	type: 'addAdmin',
	name,
	address,
	phoneNumber,
	email,
	password
});

export const registerProduct = (
	img: string,
	name: string,
	price: string,
	quantity: number,
	category: string,
	description: string
) : RegisterProduct => ({
	type: 'registerProduct',
	img,
	name,
	price,
	quantity,
	category,
	description
});
