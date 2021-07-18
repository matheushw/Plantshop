import { 
  AddAdminError, 
  AddAdminRequest, 
  AddAdminSuccess, 
  AddInventoryError, 
  AddInventoryRequest, 
  AddInventorySuccess, 
  AddProductToChartError, 
  AddProductToChartRequest, 
  AddProductToChartSuccess, 
  ClearProductInCartError, 
  ClearProductInCartRequest, 
  ClearProductInCartSuccess, 
  EditUserError, 
  EditUserRequest, 
  EditUserSuccess, 
  LoadAllProductsError, 
  LoadAllProductsRequest, 
  LoadAllProductsSuccess, 
  LoadUsersError, 
  LoadUsersRequest, 
  LoadUsersSuccess, 
  LogInUserError, 
  LogInUserRequest, 
  LogInUserSuccess, 
  LogOutError, 
  LogOutRequest, 
  LogOutSuccess, 
  MinusProductInCartError, 
  MinusProductInCartRequest, 
  MinusProductInCartSuccess, 
  PlaceOrderError, 
  PlaceOrderRequest, 
  PlaceOrderSuccess, 
  PlusProductInCartError, 
  PlusProductInCartRequest, 
  PlusProductInCartSuccess, 
  RegisterProductError, 
  RegisterProductRequest, 
  RegisterProductSuccess, 
  RemoveInventoryError, 
  RemoveInventoryRequest, 
  RemoveInventorySuccess, 
  RemoveProductError, 
  RemoveProductFromCartError, 
  RemoveProductFromCartRequest, 
  RemoveProductFromCartSuccess, 
  RemoveProductRequest, 
  RemoveProductSuccess, 
  RemoveRentOrderError, 
  RemoveRentOrderRequest, 
  RemoveRentOrderSuccess, 
  RentProductError, 
  RentProductRequest, 
  RentProductSuccess, 
  SignUpUserError, 
  SignUpUserRequest, 
  SignUpUserSuccess 
} from "./actions";
import { ActionTypes } from "./actionTypes";
import { ProductModel, RentOrder, User } from "./types";

export const loadUsersRequest = (email: string, password: string): LoadUsersRequest => ({
  type: ActionTypes.LOAD_USER_REQUEST,
  email,
  password
});

export const loadUsersSuccess = (user: User): LoadUsersSuccess => ({
  type: ActionTypes.LOAD_USER_SUCCESS,
  user
});

export const loadUsersError = (): LoadUsersError => ({
  type: ActionTypes.LOAD_USER_ERROR,
});

export const addProductToChartRequest = (product: ProductModel): AddProductToChartRequest => ({
  type: ActionTypes.ADD_PRODUCT_TO_CART_REQUEST,
  product,
});

export const addProductToChartSuccess = (): AddProductToChartSuccess => ({
  type: ActionTypes.ADD_PRODUCT_TO_CART_SUCCESS,
});

export const addProductToChartError = (): AddProductToChartError => ({
  type: ActionTypes.ADD_PRODUCT_TO_CART_ERROR,
});

export const removeProductFromCartRequest = (id: string): RemoveProductFromCartRequest => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CHART_RQUEST,
  id,
});

export const removeProductFromCartSuccess = (): RemoveProductFromCartSuccess => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CHART_SUCCESS
});

export const removeProductFromCartError = (): RemoveProductFromCartError => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CHART_ERROR
});

export const minusProductInCartRequest = (id: string) : MinusProductInCartRequest => ({
  type: ActionTypes.MINUS_PRODUCT_IN_CART_REQUEST,
  id,
});

export const minusProductInCartSuccess = () : MinusProductInCartSuccess => ({
  type: ActionTypes.MINUS_PRODUCT_IN_CART_SUCCESS,
});

export const minusProductInCartError = () : MinusProductInCartError => ({
  type: ActionTypes.MINUS_PRODUCT_IN_CART_ERROR,
});

export const plusProductInCartRequest = (id: string) : PlusProductInCartRequest => ({
  type: ActionTypes.PLUS_PRODUCT_IN_CHART_REQUEST,
  id,
});

export const plusProductInCartSuccess = () : PlusProductInCartSuccess => ({
  type: ActionTypes.PLUS_PRODUCT_IN_CHART_SUCCESS,
});

export const plusProductInCartError = () : PlusProductInCartError => ({
  type: ActionTypes.PLUS_PRODUCT_IN_CHART_ERROR,
});

export const placeOrderRequest = (): PlaceOrderRequest => ({
  type: ActionTypes.PLACE_ORDER_REQUEST,
});

export const placeOrderSuccess = (): PlaceOrderSuccess => ({
  type: ActionTypes.PLACE_ORDER_SUCCESS,
});

export const placeOrderError = (): PlaceOrderError => ({
  type: ActionTypes.PLACE_ORDER_ERROR,
});

export const clearProductInCartRequest = (): ClearProductInCartRequest => ({
  type: ActionTypes.CLEAR_PRODUCT_IN_CART_REQUEST,
});

export const clearProductInCartSuccess = (): ClearProductInCartSuccess => ({
  type: ActionTypes.CLEAR_PRODUCT_IN_CART_SUCCESS,
});

export const clearProductInCartError = (): ClearProductInCartError => ({
  type: ActionTypes.CLEAR_PRODUCT_IN_CART_ERROR,
});

export const removeRentOrderRequest = (orderId: number): RemoveRentOrderRequest => ({
  type: ActionTypes.REMOVE_RENT_ORDER_REQUEST,
  orderId,
});

export const removeRentOrderSuccess = (): RemoveRentOrderSuccess => ({
  type: ActionTypes.REMOVE_RENT_ORDER_SUCCESS,
});

export const removeRentOrderError = (): RemoveRentOrderError => ({
  type: ActionTypes.REMOVE_RENT_ORDER_ERROR,
});

export const logInUserRequest = (user: User): LogInUserRequest => ({
  type: ActionTypes.LOGIN_USER_REQUEST,
  user
});

export const logInUserSuccess = (): LogInUserSuccess => ({
  type: ActionTypes.LOGIN_USER_SUCCESS,
});

export const logInUserError = (): LogInUserError => ({
  type: ActionTypes.LOGIN_USER_ERROR,
});

export const addInventoryRequest = (productId: string): AddInventoryRequest => ({
    type: ActionTypes.ADD_INVENTORY_REQUEST,
    productId
});

export const addInventorySuccess = (): AddInventorySuccess => ({
  type: ActionTypes.ADD_INVENTORY_SUCCESS,
});

export const addInventoryError = (): AddInventoryError => ({
  type: ActionTypes.ADD_INVENTORY_ERROR,
});

export const removeInventoryRequest = (productId: string): RemoveInventoryRequest => ({
  type: ActionTypes.REMOVE_INVENTORY_REQUEST,
  productId
});

export const removeInventorySuccess = (): RemoveInventorySuccess => ({
  type: ActionTypes.REMOVE_INVENTORY_SUCCESS,
});

export const removeInventoryError = (): RemoveInventoryError => ({
  type: ActionTypes.REMOVE_INVENTORY_ERROR,
});

export const removeProductRequest = (productId: string): RemoveProductRequest => ({
  type: ActionTypes.REMOVE_PRODUCT_REQUEST,
  productId
});

export const removeProductSuccess = (productId: string): RemoveProductSuccess => ({
  type: ActionTypes.REMOVE_PRODUCT_SUCCESS,
});

export const removeProductError = (productId: string): RemoveProductError => ({
  type: ActionTypes.REMOVE_PRODUCT_ERROR,
});

export const rentProductRequest = (rentOrder: RentOrder): RentProductRequest => ({
  type: ActionTypes.RENT_PRODUCT_REQUEST,
  rentOrder
});

export const rentProductSuccess = (): RentProductSuccess => ({
  type: ActionTypes.RENT_PRODUCT_SUCCESS,
});

export const rentProductError = (): RentProductError=> ({
  type: ActionTypes.RENT_PRODUCT_ERROR,
});

export const signUpUserRequest = (
  name: User["name"], 
  address: User["address"],
  phoneNumber: User["phoneNumber"], 
  email: User["email"], 
  password: User["password"]
): SignUpUserRequest => ({
  type: ActionTypes.SING_UP_USER_REQUEST,
  name,
  address,
  phoneNumber,
  email,
  password
});

export const signUpUserSuccess = (): SignUpUserSuccess => ({
  type: ActionTypes.SING_UP_USER_SUCCESS,
});

export const signUpUserError = (): SignUpUserError => ({
  type: ActionTypes.SING_UP_USER_ERROR,
});

export const editUserRequest = (
  name: User["name"], 
  address: User["address"],
  phoneNumber: User["phoneNumber"], 
  email: User["email"], 
  id: User["id"]
): EditUserRequest => ({
  type: ActionTypes.EDIT_USER_REQUEST,
  name,
  address,
  phoneNumber,
  email,
  id
});

export const editUserSuccess = (): EditUserSuccess  => ({
  type: ActionTypes.EDIT_USER_SUCCESS,
});

export const editUserError = (): EditUserError => ({
  type: ActionTypes.EDIT_USER_ERROR,
});

export const addAdminRequest = (
  name: User["name"], 
  address: User["address"],
  phoneNumber: User["phoneNumber"], 
  email: User["email"], 
  password: User["password"]
): AddAdminRequest => ({
  type: ActionTypes.ADD_ADMIN_REQUEST,
  name,
  address,
  phoneNumber,
  email,
  password
});

export const addAdminSuccess = (): AddAdminSuccess => ({
  type: ActionTypes.ADD_ADMIN_SUCCESS,
});

export const addAdminError = (): AddAdminError => ({
  type: ActionTypes.ADD_ADMIN_ERROR,
});

export const registerProductRequest = (
  img: string,
  name: string,
  price: string,
  quantity: number,
  category: string,
  description: string
) : RegisterProductRequest => ({
  type: ActionTypes.REGISTER_PRODUCT_REQUEST,
  img,
  name,
  price,
  quantity,
  category,
  description
});

export const registerProductSuccess = () : RegisterProductSuccess => ({
  type: ActionTypes.REGISTER_PRODUCT_SUCCESS,
});

export const registerProductError = () : RegisterProductError => ({
  type: ActionTypes.REGISTER_PRODUCT_ERROR,
});

export const logOutRequest = () : LogOutRequest => ({
  type: ActionTypes.LOG_OUT_REQUEST,
});

export const logOutSuccess = () : LogOutSuccess => ({
  type: ActionTypes.LOG_OUT_SUCCESS,
});

export const logOutError = () : LogOutError => ({
  type: ActionTypes.LOG_OUT_ERROR,
});

export const loadAllProductsRequest = () : LoadAllProductsRequest => ({
  type: ActionTypes.LOAD_ALL_PRODUCTS_REQUEST,
});

export const loadAllProductsSuccess = (products: ProductModel[]) : LoadAllProductsSuccess => ({
  type: ActionTypes.LOAD_ALL_PRODUCTS_SUCCESS,
  products,
});

export const loadAllProductsError = () : LoadAllProductsError => ({
  type: ActionTypes.LOAD_ALL_PRODUCTS_ERROR,
});