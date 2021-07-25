import { all, call, put, takeLatest } from 'redux-saga/effects'
import { 
  loadAllOrdersError, loadAllOrdersSuccess, 
  loadAllProductsError, loadAllProductsSuccess, 
  loadUsersError, loadUsersSuccess, 
  placePurchaseOrderError, placePurchaseOrderSuccess, 
  placeRentOrdersError, placeRentOrdersSuccess, 
  signUpUserError, signUpUserSuccess,
  addAdminError, addAdminSuccess,
  addProductError, addProductSuccess,
  removeProductError, removeProductSuccess,
  addInventoryError, addInventorySuccess,
  removeInventoryError, removeInventorySuccess,
  editUserError, editUserSuccess

} from './actionCreators';
import { LoadAllOrdersRequest, LoadUsersRequest, PlacePurchaseOrderRequest, PlaceRentOrdersRequest, SignUpUserRequest, AddAdminRequest, AddProductRequest, RemoveProductRequest, AddInventoryRequest, RemoveInventoryRequest, EditUserRequest} from './actions';
import { ActionTypes } from './actionTypes';
import ApiRequester from './apiRequester'
import { RentOrder } from './types';

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchUser(action: LoadUsersRequest) : any {
  try {
    const user = yield call(ApiRequester.authenticateUser, action.email, action.password);
    yield put(user.name === undefined ? loadUsersError() : loadUsersSuccess(user));
  } catch (e) {
    yield put(loadUsersError());
  }
}

function* editUserSagas(action: EditUserRequest) : any {
  try {
    const response = yield call(ApiRequester.editUser, action.name, action.address, action.phoneNumber, action.email, action.id);
    yield put(response.status === 404 ? editUserError() : editUserSuccess());
  } catch (e) {
    yield put(editUserError());
  }
}

function* signUpUserSagas(action: SignUpUserRequest) : any {
  try {
    const response = yield call(ApiRequester.registerUser, action.name, action.address, action.phoneNumber, action.email, action.password);
    yield put(response.status === 404 ? signUpUserError() : signUpUserSuccess());
  } catch (e) {
    yield put(signUpUserError());
  }
}

function* addAdminSagas(action: AddAdminRequest) : any {
  try {
    const response = yield call(ApiRequester.addAdmin, action.name, action.address, action.phoneNumber, action.email, action.password);
    yield put(response.status === 404 ? addAdminError() : addAdminSuccess());
  } catch (e) {
    yield put(addAdminError());
  }
}

function* addProductSagas(action: AddProductRequest) : any {
  try {
    const response = yield call(ApiRequester.addProduct, action.name, action.category, action.quantity, action.img, action.price, action.description);
    yield put(response === 404 ? addProductError() : addProductSuccess());
  } catch (e) {
    yield put(addProductError());
  }
}

function* removeProductSagas(action: RemoveProductRequest) : any {
  try {
    const response = yield call(ApiRequester.removeProduct, action.productId);
    yield put(response === 404 ? removeProductError() : removeProductSuccess());
  } catch (e) {
    yield put(removeProductError());
  }
}

function* addInventorySagas(action: AddInventoryRequest) : any {
  try {
    const product = yield call(ApiRequester.addInventory, action.productId);
    yield put(product === 404 ? addInventoryError() : addInventorySuccess(product));
  } catch (e) {
    yield put(addInventoryError());
  }
}

function* removeInventorySagas(action: RemoveInventoryRequest) : any {
  try {
    const response = yield call(ApiRequester.removeInventory, action.productId);
    yield put(response === 404 ? removeInventoryError() : removeInventorySuccess());
  } catch (e) {
    yield put(removeInventoryError());
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
    takeLatest(ActionTypes.EDIT_USER_REQUEST, editUserSagas),
    takeLatest(ActionTypes.LOAD_ALL_PRODUCTS_REQUEST, loadAllProductsSagas),
    takeLatest(ActionTypes.SIGN_UP_USER_REQUEST, signUpUserSagas),
    takeLatest(ActionTypes.PLACE_PURCHASE_ORDER_REQUEST, placePurchaseOrderSagas),
    takeLatest(ActionTypes.PLACE_RENT_ORDERS_REQUEST, placeRentOrdersSagas),
    takeLatest(ActionTypes.LOAD_ALL_ORDERS_REQUEST, loadAllOrdersSagas),
    takeLatest(ActionTypes.SIGN_UP_USER_REQUEST, signUpUserSagas),
    takeLatest(ActionTypes.ADD_ADMIN_REQUEST, addAdminSagas),
    takeLatest(ActionTypes.ADD_PRODUCT_REQUEST, addProductSagas),
    takeLatest(ActionTypes.REMOVE_PRODUCT_REQUEST, removeProductSagas),
    takeLatest(ActionTypes.ADD_INVENTORY_REQUEST, addInventorySagas),
    takeLatest(ActionTypes.REMOVE_INVENTORY_REQUEST, removeInventorySagas)
  ]);
}

export default mySaga;