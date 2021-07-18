import axios from "axios";
import { ProductModel, User } from "./types";

const endPoint = "http://localhost:3001";

class ApiRequester {

  public static authenticate = async (email: string, password: string) => {
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
}

export default ApiRequester;