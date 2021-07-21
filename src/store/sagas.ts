import { all, call, put, takeLatest } from 'redux-saga/effects'
import { loadAllProductsError, loadAllProductsSuccess, loadUsersError, loadUsersSuccess, signUpUserError, signUpUserSuccess } from './actionCreators';
import { LoadUsersRequest, SignUpUserRequest } from './actions';
import { ActionTypes } from './actionTypes';
import ApiRequester from './apiRequester'
import { User } from './types';

// Worker Saga: will be fired on USER_FETCH_REQUESTED actions

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
    const response = yield call(ApiRequester.registerUser, action.name, action.address, action.phoneNumber, action.email, action.password);
    yield put(response.status === 404 ? signUpUserError() : signUpUserSuccess());
  } catch (e) {
    console.log("error")
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

function* mySaga() {
  yield all([
    takeLatest(ActionTypes.LOAD_USER_REQUEST, fetchUser),
    takeLatest(ActionTypes.LOAD_ALL_PRODUCTS_REQUEST, loadAllProductsSagas),
    takeLatest(ActionTypes.SIGN_UP_USER_REQUEST, signUpUserSagas),
  ]);
}

export default mySaga;