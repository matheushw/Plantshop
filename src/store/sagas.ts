import { all, call, put, takeLatest } from 'redux-saga/effects'
import { loadAllOrdersError, loadAllOrdersSuccess, loadAllProductsError, loadAllProductsSuccess, loadUsersError, loadUsersSuccess, placePurchaseOrderError, placePurchaseOrderSuccess, placeRentOrdersError, placeRentOrdersSuccess, signUpUserError, signUpUserSuccess } from './actionCreators';
import { LoadAllOrdersRequest, LoadAllProductsRequest, LoadUsersRequest, PlacePurchaseOrderRequest, PlaceRentOrdersRequest, SignUpUserRequest } from './actions';
import { ActionTypes } from './actionTypes';
import ApiRequester from './apiRequester'
import { RentOrder } from './types';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchUser(action: LoadUsersRequest) : any {
  try {
    const user = yield call(ApiRequester.authenticateUser, action.email, action.password);
    yield put(user.name === undefined ? loadUsersError() : loadUsersSuccess(user));
  } catch (e) {
    yield put(loadUsersError());
  }
}

function* signUpUserSagas(action: SignUpUserRequest) : any {
  try {
    const user = yield call(ApiRequester.registerUser, action.name, action.address, action.phoneNumber, action.email, action.password);
    console.log(user);
    yield put(signUpUserSuccess());
  } catch (e) {
    yield put(signUpUserError());
  }
}

function* loadAllProductsSagas() : any {
  try {
    const products = yield call(ApiRequester.getAllProducts);
    yield put(products.length === 0 ? loadAllProductsError() : loadAllProductsSuccess(products));
  } catch (e) {
    yield put(loadAllProductsError());
  }
}

function* placePurchaseOrderSagas(action: PlacePurchaseOrderRequest) : any {
  try {
    const response = yield call(ApiRequester.placePurchaseOrder, action.user, action.order);
    yield put(response?.status=== 200? placePurchaseOrderSuccess() : placePurchaseOrderError());
  } catch (e) {
    yield put(placePurchaseOrderError());
  }
}

function* placeRentOrdersSagas(action: PlaceRentOrdersRequest) : any {
  try {
    const response = yield call(ApiRequester.placeRentOrders, action.user, action.rentOrders);
    yield put(response?.status=== 200? placeRentOrdersSuccess() : placeRentOrdersError());
  } catch (e) {
    yield put(placeRentOrdersError());
  }
}

function* loadAllOrdersSagas(action: LoadAllOrdersRequest) : any {
  try {
    const purchaseOrders = yield call(ApiRequester.getAllPurchaseOrders, action.user);
    const rentOrders = yield call(ApiRequester.getAllRentOrders, action.user);

    let rentOrdersDTO: RentOrder[] = [];

    if(rentOrders?.status === 200){ 
      rentOrdersDTO = rentOrders.data?.map((rentOrder: any) => <RentOrder> {
        ...rentOrder, startDate: new Date(rentOrder.startDate), endDate: new Date(rentOrder.endDate)
      });
    }

    yield put(
      purchaseOrders?.status === 200 && rentOrders?.status=== 200? 
        loadAllOrdersSuccess(purchaseOrders.data, rentOrdersDTO) : loadAllOrdersError()
    );
  } catch (e) {
    yield put(loadAllOrdersError());
  }
}

function* mySaga() {
  yield all([
    takeLatest(ActionTypes.LOAD_USER_REQUEST, fetchUser),
    takeLatest(ActionTypes.LOAD_ALL_PRODUCTS_REQUEST, loadAllProductsSagas),
    takeLatest(ActionTypes.SING_UP_USER_REQUEST, signUpUserSagas),
    takeLatest(ActionTypes.PLACE_PURCHASE_ORDER_REQUEST, placePurchaseOrderSagas),
    takeLatest(ActionTypes.PLACE_RENT_ORDERS_REQUEST, placeRentOrdersSagas),
    takeLatest(ActionTypes.LOAD_ALL_ORDERS_REQUEST, loadAllOrdersSagas)
  ]);
}

export default mySaga;