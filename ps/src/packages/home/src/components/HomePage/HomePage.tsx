import React, { ReactElement } from 'react';
import Product from '../../../../../base-components/product/src/components/Product/Product';
import ProductList from '../../../../../base-components/product-list/src/components/ProductList/ProductList';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {

  const mockProducts = (name: string, price: string) =>{
    var products: ReactElement[] = [];
    for(var i=0;i<6;i++){
      products.push(
        <Product 
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
        <ProductList title="Buques" products={mockProducts("Buquê X", "24.99")} />
    </div>
  );
};

export default HomePage;
