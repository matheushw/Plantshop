import { all, call, put, takeLatest } from 'redux-saga/effects'
import { loadAllProductsError, loadAllProductsSuccess, loadUsersError, loadUsersSuccess } from './actionCreators';
import { LoadAllProductsRequest, LoadUsersRequest } from './actions';
import { ActionTypes } from './actionTypes';
import ApiRequester from './apiRequester'
import { User } from './types';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions

function* fetchUser(action: LoadUsersRequest) : any {
   try {
      const user = yield call(ApiRequester.authenticate, action.email, action.password);
      yield put(user.name === undefined? loadUsersError() : loadUsersSuccess(user));
   } catch (e) {
      yield put(loadUsersError());
   }
}

function* loadAllProductsSagas() : any {
   try {
      const products = yield call(ApiRequester.getAllProducts);
      yield put(loadAllProductsSuccess(products));
   } catch (e) {
      yield put(loadAllProductsError());
   }
}

function* mySaga() {
  yield all([
     takeLatest(ActionTypes.LOAD_USER_REQUEST, fetchUser),
     takeLatest(ActionTypes.LOAD_ALL_PRODUCTS_REQUEST, loadAllProductsSagas),
  ]);
}

export default mySaga;