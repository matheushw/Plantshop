import React, { ReactElement } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';
import ProductList from '../ProductList/ProductList';

import * as styles from './styles';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {

  const mockProducts = (name: string, price: string) =>{
    var products: ReactElement[] = [];
    for(var i=0;i<6;i++){
      console.log('bla')
      products.push(
        <HomeProduct 
          img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
          name = {name}
          price = {price}
        />
      );
    }

    return products;
  }

  return (
    <div>
        <ProductList title="Promoções" products={mockProducts("Planta X", "19.99")} />
    </div>
  );
};

export default HomePage;
