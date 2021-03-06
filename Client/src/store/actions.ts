import { Action } from 'redux';
import { ActionTypes } from './actionTypes';
import { Order, ProductModel, RentOrder, User } from './types';

// Authentication
export interface LoadUsersRequest extends Action {
  type: ActionTypes.LOAD_USER_REQUEST;
	email: string;
	password: string;
}

export interface LoadUsersSuccess extends Action {
	type: ActionTypes.LOAD_USER_SUCCESS;
	user: User;
}

export interface LoadUsersError extends Action {
  type: ActionTypes.LOAD_USER_ERROR;
}

export interface LoadUsersLocalStorage extends Action {
  type: ActionTypes.LOAD_USERS_LOCAL_STORAGE;
}
export interface LoadUsersReset extends Action {
  type: ActionTypes.LOAD_USER_RESET;
}

export interface LogInUserRequest extends Action {
  type: ActionTypes.LOGIN_USER_REQUEST;
  user: User;
}

export interface LogInUserSuccess extends Action {
  type: ActionTypes.LOGIN_USER_SUCCESS;
}

export interface LogInUserError extends Action {
  type: ActionTypes.LOGIN_USER_ERROR;
}

//Shopping Cart
export interface AddProductToChartRequest extends Action {
	type: ActionTypes.ADD_PRODUCT_TO_CART_REQUEST;
	product: ProductModel;
}

export interface AddProductToChartSuccess extends Action {
	type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS;
}

export interface AddProductToChartError extends Action {
	type: ActionTypes.ADD_PRODUCT_TO_CART_ERROR;
}

export interface RemoveProductFromCartRequest extends Action {
	type: ActionTypes.REMOVE_PRODUCT_FROM_CART_RQUEST;
	id: string;
}

export interface RemoveProductFromCartSuccess extends Action {
	type: ActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS;
}

export interface RemoveProductFromCartError extends Action {
	type: ActionTypes.REMOVE_PRODUCT_FROM_CART_ERROR;
}

export interface MinusProductInCartRequest extends Action{
	type: ActionTypes.MINUS_PRODUCT_IN_CART_REQUEST;
	id: string;
}

export interface MinusProductInCartSuccess extends Action{
	type: ActionTypes.MINUS_PRODUCT_IN_CART_SUCCESS;
}

export interface MinusProductInCartError extends Action{
	type: ActionTypes.MINUS_PRODUCT_IN_CART_ERROR;
}

export interface PlusProductInCartRequest extends Action{
  type: ActionTypes.PLUS_PRODUCT_IN_CART_REQUEST;
  id: string;
}

export interface PlusProductInCartSuccess extends Action{
  type: ActionTypes.PLUS_PRODUCT_IN_CART_SUCCESS;
}

export interface PlusProductInCartError extends Action{
  type: ActionTypes.PLUS_PRODUCT_IN_CART_ERROR;
}

export interface PlacePurchaseOrderRequest extends Action {
  user: User,
  order: Order,
  type: ActionTypes.PLACE_PURCHASE_ORDER_REQUEST;
}

export interface PlacePurchaseOrderSuccess extends Action {
  type: ActionTypes.PLACE_PURCHASE_ORDER_SUCCESS;
}

export interface PlacePurchaseOrderError extends Action {
  type: ActionTypes.PLACE_PURCHASE_ORDER_ERROR;
}

export interface PlacePurchaseOrderNotAsked extends Action {
  type: ActionTypes.PLACE_PURCHASE_ORDER_NOT_ASKED;
}

export interface ClearProductInCartRequest extends Action {
  type: ActionTypes.CLEAR_PRODUCT_IN_CART_REQUEST;
}

export interface ClearProductInCartSuccess extends Action {
  type: ActionTypes.CLEAR_PRODUCT_IN_CART_SUCCESS;
}

export interface ClearProductInCartError extends Action {
  type: ActionTypes.CLEAR_PRODUCT_IN_CART_ERROR;
}

// Order Management
export interface RemoveRentOrderRequest extends Action {
  type: ActionTypes.REMOVE_RENT_ORDER_REQUEST;
  orderId: number;
}

export interface RemoveRentOrderSuccess extends Action {
  type: ActionTypes.REMOVE_RENT_ORDER_SUCCESS;
}

export interface RemoveRentOrderError extends Action {
  type: ActionTypes.REMOVE_RENT_ORDER_ERROR;
}


// Inventory
export interface AddInventoryRequest extends Action {
  type: ActionTypes.ADD_INVENTORY_REQUEST;
  productId: string;
}

export interface AddInventorySuccess extends Action {
  type: ActionTypes.ADD_INVENTORY_SUCCESS;
  product: ProductModel;
}

export interface AddInventoryError extends Action {
  type: ActionTypes.ADD_INVENTORY_ERROR;
}

export interface RemoveInventoryRequest extends Action {
  type: ActionTypes.REMOVE_INVENTORY_REQUEST;
  productId: string;
}

export interface RemoveInventorySuccess extends Action {
  type: ActionTypes.REMOVE_INVENTORY_SUCCESS;
}

export interface RemoveInventoryError extends Action {
  type: ActionTypes.REMOVE_INVENTORY_ERROR;
}

export interface RemoveProductRequest extends Action {
  type: ActionTypes.REMOVE_PRODUCT_REQUEST;
  productId: string;
}

export interface RemoveProductSuccess extends Action {
  type: ActionTypes.REMOVE_PRODUCT_SUCCESS;
}

export interface RemoveProductError extends Action {
  type: ActionTypes.REMOVE_PRODUCT_ERROR;
}

export interface RentProductRequest extends Action {
  type: ActionTypes.RENT_PRODUCT_REQUEST;
  rentOrder: RentOrder;
}

export interface RentProductSuccess extends Action {
  type: ActionTypes.RENT_PRODUCT_SUCCESS;
}

export interface RentProductError extends Action {
  type: ActionTypes.RENT_PRODUCT_ERROR;
}

export interface SignUpUserRequest extends Action {
  type: ActionTypes.SIGN_UP_USER_REQUEST;
  name: string;
	address: string;
  phoneNumber: string;
	email: string;
  password: string;
}

export interface SignUpUserSuccess extends Action {
  type: ActionTypes.SIGN_UP_USER_SUCCESS;
}

export interface SignUpUserError extends Action {
  type: ActionTypes.SIGN_UP_USER_ERROR;
}

export interface SignUpUserReset extends Action {
  type: ActionTypes.SIGN_UP_USER_RESET;
}

export interface EditUserRequest extends Action {
  type: ActionTypes.EDIT_USER_REQUEST;
  name: string;
	address: string;
  phoneNumber: string;
	email: string;
  id: string;
}

//User management
export interface EditUserSuccess extends Action {
  type: ActionTypes.EDIT_USER_SUCCESS;
}

export interface EditUserError extends Action {
  type: ActionTypes.EDIT_USER_ERROR;
}

export interface AddAdminRequest extends Action {
	type: ActionTypes.ADD_ADMIN_REQUEST;
	name: string;
	address: string;
	phoneNumber: string;
	email: string;
	password: string;
}

export interface AddAdminSuccess extends Action {
	type: ActionTypes.ADD_ADMIN_SUCCESS;
}

export interface AddAdminError extends Action {
	type: ActionTypes.ADD_ADMIN_ERROR;
}

export interface AddAdminReset extends Action {
	type: ActionTypes.ADD_ADMIN_RESET;
}

export interface AddProductRequest extends Action {
	type: ActionTypes.ADD_PRODUCT_REQUEST;
  img: string;
	name: string;
	price: string;
	quantity: number;
	category: string;
	description: string;
}

export interface AddProductSuccess extends Action {
	type: ActionTypes.ADD_PRODUCT_SUCCESS;
}

export interface AddProductError extends Action {
	type: ActionTypes.ADD_PRODUCT_ERROR;
}

export interface AddProductReset extends Action {
	type: ActionTypes.ADD_PRODUCT_RESET;
}

export interface LogOutRequest extends Action {
	type: ActionTypes.LOG_OUT_REQUEST;
}

export interface LoadAllProductsRequest extends Action {
  type: ActionTypes.LOAD_ALL_PRODUCTS_REQUEST;
}

export interface LoadAllProductsSuccess extends Action {
  type: ActionTypes.LOAD_ALL_PRODUCTS_SUCCESS;
  products: ProductModel[];
}

export interface LoadAllProductsError extends Action {
  type: ActionTypes.LOAD_ALL_PRODUCTS_ERROR;
}

export interface PlaceRentOrdersRequest extends Action {
  type: ActionTypes.PLACE_RENT_ORDERS_REQUEST;
  rentOrders: RentOrder[],
  user: User,
}

export interface PlaceRentOrdersSuccess extends Action {
  type: ActionTypes.PLACE_RENT_ORDERS_SUCCESS;
}

export interface PlaceRentOrdersError extends Action {
  type: ActionTypes.PLACE_RENT_ORDERS_ERROR;
}

export interface PlaceRentOrdersNotAsked extends Action {
  type: ActionTypes.PLACE_RENT_ORDERS_NOT_ASKED;
}

export interface LoadAllOrdersRequest extends Action {
  type: ActionTypes.LOAD_ALL_ORDERS_REQUEST;
  user: User;
}

export interface LoadAllOrdersSuccess extends Action {
  type: ActionTypes.LOAD_ALL_ORDERS_SUCCESS;
  purchaseOrders: Order[];
  rentOrders: RentOrder[];
}

export interface LoadAllOrdersError extends Action {
  type: ActionTypes.LOAD_ALL_ORDERS_ERROR;
}

export interface InventoryReset extends Action {
  type: ActionTypes.INVENTORY_RESET;
}

export type ApplicationAction = 
| LoadUsersRequest 
| LoadUsersSuccess 
| LoadUsersError 
| LoadUsersLocalStorage
| LoadUsersReset
| AddProductToChartRequest 
| AddProductToChartSuccess 
| AddProductToChartError 
| RemoveProductFromCartRequest 
| RemoveProductFromCartSuccess 
| RemoveProductFromCartError 
| LogInUserRequest 
| LogInUserSuccess 
| LogInUserError 
| SignUpUserRequest 
| SignUpUserSuccess 
| SignUpUserError 
| PlacePurchaseOrderRequest 
| PlacePurchaseOrderSuccess 
| PlacePurchaseOrderError 
| PlacePurchaseOrderNotAsked 
| SignUpUserReset
| ClearProductInCartRequest 
| ClearProductInCartSuccess 
| ClearProductInCartError 
| EditUserRequest 
| EditUserSuccess 
| EditUserError 
| AddInventoryRequest 
| AddInventorySuccess 
| AddInventoryError 
| RemoveInventoryRequest 
| RemoveInventorySuccess 
| RemoveInventoryError 
| RemoveProductRequest 
| RemoveProductSuccess 
| RemoveProductError 
| RentProductRequest
| RentProductSuccess
| RentProductError
| AddAdminRequest 
| AddAdminSuccess 
| AddAdminError 
| AddAdminReset
| AddProductRequest
| AddProductSuccess
| AddProductError
| AddProductReset
| RemoveRentOrderRequest
| RemoveRentOrderSuccess
| RemoveRentOrderError
| LogOutRequest
| MinusProductInCartRequest
| MinusProductInCartSuccess
| MinusProductInCartError
| PlusProductInCartRequest
| PlusProductInCartSuccess
| PlusProductInCartError
| LoadAllProductsRequest
| LoadAllProductsSuccess
| LoadAllProductsError
| LoadAllOrdersRequest
| LoadAllOrdersSuccess
| LoadAllOrdersError
| PlaceRentOrdersRequest
| PlaceRentOrdersSuccess
| PlaceRentOrdersError
| PlaceRentOrdersNotAsked
| AddInventoryRequest
| AddInventorySuccess
| AddInventoryError
| RemoveInventoryRequest
| RemoveInventorySuccess
| RemoveInventoryError
| InventoryReset;
