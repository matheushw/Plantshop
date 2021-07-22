import axios from "axios";
import { Order, ProductModel, ProductOrder, RentOrder, User } from "./types";

const endPoint = "http://localhost:3001";

class ApiRequester {

  public static authenticateUser = async (email: string, password: string) => {
    try{
      const response = await axios(endPoint + "/user", {
        method: 'get',
        params: {
          email: email,
          password: password
        }
      });
      const user: User = {
        address: response.data['address'],
        email: response.data['email'],
        id: response.data['_id'],
        name: response.data['name'],
        password: response.data['password'],
        phoneNumber: response.data['phoneNumber'],
        role:response.data['role'],
      }

      return user;
    } catch(error) {
      throw error;
    }
  }

  public static registerUser = async (
    name: string,
    address: string,
    phoneNumber: string,
    email: string,
    password: string) => {
    try{
      const response = await axios(endPoint + "/user", {
        method: 'post',
        params: {
          name: name,
          address: address,
          phoneNumber: phoneNumber,
          email: email,
          password: password
        },
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return response;
    } catch (error) {
      throw error;
    }
  }

  public static getAllProducts = async () => {
    try{
      const response = await axios.get(endPoint + "/product");

      const products: ProductModel[] = response.data.map((product: any) : ProductModel  => {
        return {
          description: product['description'],
          id: product['_id'],
          img: product['img'],
          name: product['name'],
          price: product['price'],
          quantity: product['quantity'],
          type: product['type']
        }
      });

      return products;
    } catch(error) {
      throw error;
    }
  }
  
  public static getAllPurchaseOrders = async (user: User) => {
    try{
      const response = await axios(endPoint + "/purchaseOrderGroup", {
        method: 'get',
        params: {
          userId: user.id
        }
      });
      return response;
    } catch(error) {
      throw error;
    }
  }
  
  public static getAllRentOrders = async (user: User) => {
    try{
      const response = await axios(endPoint + "/rentOrders", {
        method: 'get',
        params: {
          userId: user.id
        }
      });
      return response;
    } catch(error) {
      throw error;
    }
  }

  public static placePurchaseOrder = async (user: User, order: Order) => {
    try{
      const orderDTO = {...order, userId: user.id};
      const response = await axios(endPoint + "/purchaseOrderGroup", {
        method: 'post',
        data: orderDTO,
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return response;
    } catch(error) {
      throw error;
    }
  }

  public static placeRentOrders = async (user: User, orders: RentOrder[]) => {
    try{
      const orderDTO = orders.map((order)=> (
        {
          ...order, 
          startDate:order.startDate?.getTime(), 
          endDate:order.endDate?.getTime(), 
          userId: user.id
        }
      ));
      const response = await axios(endPoint + "/rentOrders", {
        method: 'post',
        data: orderDTO,
        headers: {
          'Content-Type': 'application/json'
        },
      });
      return response;
    } catch(error) {
      throw error;
    }
  }
}

export default ApiRequester;