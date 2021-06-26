import React, { ReactElement } from 'react';
import Product from '../../../../../base-components/product/src/components/Product/Product';
import ProductList from '../../../../../base-components/product-list/src/components/ProductList/ProductList';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, ProductModel } from '../../../../../store/types';

export interface HomePageProps {
  products: ProductModel[],
}

const HomePage: React.FC<HomePageProps> = (props) => {

  // const mockProducts = (name: string, price: string) =>{
  //   var products: ReactElement[] = [];
  //   for(var i=0;i<6;i++){
  //     products.push(
  //       <Product 
  //         img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
  //         name = {name}
  //         price = {price}
  //       />
  //     );
  //   }

  //   return products;
  // }

  const renderProduts = (product: ProductModel) =>{
    return(
      <Product id={product.id} img={product.img} name={product.name} price={product.price} description={product.description} />
    );
  }

  return (
    <div>
        <ProductList title="Promoções" products={props.products.map(renderProduts)} />
        {/* <ProductList title="Buques" products={mockProducts("Buquê X", "24.99")} /> */}
    </div>
  );
};

interface DispatchProps {}

const mapStateToProps = (state: ApplicationState): HomePageProps => ({
  products: state.products
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
