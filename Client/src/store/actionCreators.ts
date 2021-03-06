import { 
  AddAdminError, 
  AddAdminRequest, 
  AddAdminReset,
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
  LoadAllOrdersError, 
  LoadAllOrdersRequest, 
  LoadAllOrdersSuccess, 
  LoadAllProductsError, 
  LoadAllProductsRequest, 
  LoadAllProductsSuccess, 
  LoadUsersError, 
  LoadUsersLocalStorage, 
  LoadUsersRequest,
  LoadUsersReset, 
  LoadUsersSuccess, 
  LogInUserError, 
  LogInUserRequest, 
  LogInUserSuccess, 
  LogOutRequest, 
  MinusProductInCartError, 
  MinusProductInCartRequest, 
  MinusProductInCartSuccess, 
  PlacePurchaseOrderError, 
  PlacePurchaseOrderNotAsked, 
  PlacePurchaseOrderRequest, 
  PlacePurchaseOrderSuccess, 
  PlaceRentOrdersError, 
  PlaceRentOrdersNotAsked, 
  PlaceRentOrdersRequest, 
  PlaceRentOrdersSuccess, 
  PlusProductInCartError, 
  PlusProductInCartRequest, 
  PlusProductInCartSuccess, 
  AddProductError, 
  AddProductRequest, 
  AddProductSuccess, 
  AddProductReset,
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
  SignUpUserSuccess,
  SignUpUserReset,
  InventoryReset
} from "./actions";
import { ActionTypes } from "./actionTypes";
import { Order, ProductModel, RentOrder, User } from "./types";

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

export const loadUsersLocalStorage = (): LoadUsersLocalStorage => ({
  type: ActionTypes.LOAD_USERS_LOCAL_STORAGE,
});

export const loadUsersReset = (): LoadUsersReset => ({
  type: ActionTypes.LOAD_USER_RESET,
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
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART_RQUEST,
  id,
});

export const removeProductFromCartSuccess = (): RemoveProductFromCartSuccess => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART_SUCCESS
});

export const removeProductFromCartError = (): RemoveProductFromCartError => ({
  type: ActionTypes.REMOVE_PRODUCT_FROM_CART_ERROR
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
  type: ActionTypes.PLUS_PRODUCT_IN_CART_REQUEST,
  id,
});

export const plusProductInCartSuccess = () : PlusProductInCartSuccess => ({
  type: ActionTypes.PLUS_PRODUCT_IN_CART_SUCCESS,
});

export const plusProductInCartError = () : PlusProductInCartError => ({
  type: ActionTypes.PLUS_PRODUCT_IN_CART_ERROR,
});

export const placePurchaseOrderRequest = (user: User, order: Order): PlacePurchaseOrderRequest => ({
  user,
  order,
  type: ActionTypes.PLACE_PURCHASE_ORDER_REQUEST,
});

export const placePurchaseOrderSuccess = (): PlacePurchaseOrderSuccess => ({
  type: ActionTypes.PLACE_PURCHASE_ORDER_SUCCESS,
});

export const placePurchaseOrderError = (): PlacePurchaseOrderError => ({
  type: ActionTypes.PLACE_PURCHASE_ORDER_ERROR,
});

export const placePurchaseOrderNotAsked = (): PlacePurchaseOrderNotAsked => ({
  type: ActionTypes.PLACE_PURCHASE_ORDER_NOT_ASKED,
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

export const addInventorySuccess = (product: ProductModel): AddInventorySuccess => ({
  type: ActionTypes.ADD_INVENTORY_SUCCESS,
  product
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

export const removeProductSuccess = (): RemoveProductSuccess => ({
  type: ActionTypes.REMOVE_PRODUCT_SUCCESS,
});

export const removeProductError = (): RemoveProductError => ({
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

export const inventoryReset = (): InventoryReset => ({
  type: ActionTypes.INVENTORY_RESET,
});

export const signUpUserRequest = (
  name: string, 
  address: string,
  phoneNumber: string, 
  email: string, 
  password: string
): SignUpUserRequest => ({
  type: ActionTypes.SIGN_UP_USER_REQUEST,
  name,
  address,
  phoneNumber,
  email,
  password
});

export const signUpUserSuccess = (): SignUpUserSuccess => ({
  type: ActionTypes.SIGN_UP_USER_SUCCESS,
});

export const signUpUserError = (): SignUpUserError => ({
  type: ActionTypes.SIGN_UP_USER_ERROR,
});

export const signUpUserReset = (): SignUpUserReset => ({
  type: ActionTypes.SIGN_UP_USER_RESET,
});

export const editUserRequest = (
  name: string, 
  address: string,
  phoneNumber: string, 
  email: string, 
  id: string
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
  name: string, 
  address: string,
  phoneNumber: string, 
  email: string, 
  password: string
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

export const addAdminReset = (): AddAdminReset => ({
  type: ActionTypes.ADD_ADMIN_RESET,
});

export const addProductRequest = (
  img: string,
  name: string,
  price: string,
  quantity: number,
  category: string,
  description: string
) : AddProductRequest => ({
  type: ActionTypes.ADD_PRODUCT_REQUEST,
  img,
  name,
  price,
  quantity,
  category,
  description
});

export const addProductSuccess = () : AddProductSuccess => ({
  type: ActionTypes.ADD_PRODUCT_SUCCESS,
});

export const addProductError = () : AddProductError => ({
  type: ActionTypes.ADD_PRODUCT_ERROR,
});

export const addProductReset = () : AddProductReset => ({
  type: ActionTypes.ADD_PRODUCT_RESET,
});

export const logOutRequest = () : LogOutRequest => ({
  type: ActionTypes.LOG_OUT_REQUEST,
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

export const placeRentOrdersRequest = (rentOrders: RentOrder[], user:User) : PlaceRentOrdersRequest => ({
  type: ActionTypes.PLACE_RENT_ORDERS_REQUEST,
  rentOrders,
  user
});

export const placeRentOrdersSuccess = () : PlaceRentOrdersSuccess => ({
  type: ActionTypes.PLACE_RENT_ORDERS_SUCCESS,
});

export const placeRentOrdersError = () : PlaceRentOrdersError => ({
  type: ActionTypes.PLACE_RENT_ORDERS_ERROR,
});

export const placeRentOrdersNotAsked = () : PlaceRentOrdersNotAsked => ({
  type: ActionTypes.PLACE_RENT_ORDERS_NOT_ASKED,
});

export const loadAllOrdersRequest = (user: User) : LoadAllOrdersRequest => ({
  type: ActionTypes.LOAD_ALL_ORDERS_REQUEST,
  user
});

export const loadAllOrdersSuccess = (purchaseOrders: Order[], rentOrders: RentOrder[]) : LoadAllOrdersSuccess => ({
  type: ActionTypes.LOAD_ALL_ORDERS_SUCCESS,
  purchaseOrders,
  rentOrders
});

export const loadAllOrdersError = () : LoadAllOrdersError => ({
  type: ActionTypes.LOAD_ALL_ORDERS_ERROR,
});