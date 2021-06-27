import { User, LoadUsersRequest, LoadUsersSuccess, LoadUsersError, AddProductToChart, ProductModel, RemoveProductToChart } from './types';

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