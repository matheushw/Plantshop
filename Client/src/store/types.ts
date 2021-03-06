export interface ProductModel {
	id: string;
	img: string;
	name: string;
	price: string;
	quantity: number;
	type: string;
	description: string;
}

export interface ProductOrder {
	id: string;
	name: string;
	price: string;
	quantity: number;
}

export interface Order {
	productsOrders: ProductOrder[];
	date: string;
	total: string;
	status: string;
}

export interface RentOrder {
  orderId: number;
  id: string;
  name: string;
  pricePerDay: string;
  date: string;
  img: string;
  startDate: Date | null;
  endDate: Date | null;
  total: string;
}

export interface User {
	id: string;
	name: string;
	address: string;
	phoneNumber: string;
	email: string;
	password: string;
	admin: boolean;
}

export interface LoadingState {
  	user: boolean;
}

export interface PossibleStates {
	loadAllOrders: boolean;
	placeRentOrders: boolean;
	placePurchaseOrder: boolean;
	user: boolean;
	allProducts: boolean;
	signUp: boolean;
	addProduct: boolean;
	removeProduct: boolean;
	addAdmin: boolean;
	addInventory: boolean;
  	removeInventory: boolean;
	editUser: boolean;
}

export const initialPossibleState: PossibleStates = {
	loadAllOrders: false,
	placeRentOrders: false,
	placePurchaseOrder: false,
	user: false,
	allProducts: false,
	signUp: false,
	addProduct: false,
	removeProduct: false,
	addAdmin: false,
	addInventory: false,
  	removeInventory: false,
	editUser: false
}

export interface ApplicationState {
  loading: PossibleStates;
  error: PossibleStates;
  success: PossibleStates;
  user: User | null;
  products: ProductModel[];
  cartProducts: Map<string, ProductModel>;
  rentOrders: RentOrder[];
  rentedProducts: RentOrder[];
  usersList: User[];
  orders: Order[];
}
