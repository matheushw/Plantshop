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
	productsOrders: ProductOrder [];
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

export interface ApplicationState {
  loading: {
		user: boolean,
		allProducts: boolean,
		signUp: boolean
	};
	error: {
		user: boolean,
		allProducts: boolean,
		signUp: boolean
	};
  success: {
    signUp: boolean
  }
  user: User | null;
  products: ProductModel[];
  cartProducts: Map<string, ProductModel>;
  rentOrders: RentOrder[];
  rentedProducts: RentOrder[];
  usersList: User[];
  orders: Order[];
}
