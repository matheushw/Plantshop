import React from 'react';
//import Product from '../../../../../base-components/product/src/components/Product/Product';
import ProductList from '../../../../../base-components/product-list/src/components/ProductList/ProductList';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, ProductModel } from '../../../../../store/types';
import * as styles from '../styles';

export interface BouquetPageProps {
  products: ProductModel[]
}

const BouquetPage: React.FC<BouquetPageProps> = (props) => {

  const splitProducts = (products: ProductModel[]) => {
    const productsMap: Map<string, ProductModel[]> = new Map();
    products.forEach((product) => {
      if (productsMap.has(product.type)){
        const typeList: ProductModel[] = productsMap.get(product.type)!;
        typeList.push(product);
        productsMap.set(product.type, typeList);
      } else {
        productsMap.set(product.type, [product]);
      }
    });

    return productsMap;
  };

    const titleType = (type:string) => {
        switch(type){
            case 'Planta':
                return 'Plantas';
            case 'Flor':
                return 'Flores';
            case 'Buque':
                return 'Buquês';
            case 'Vaso':
                return 'Vasos';
            default:
                return '';
        };
    };
    const renderProductTypeList = (products:Map<string, ProductModel[]>, type:string) => {
        if(products.has(type)){
            return <ProductList products={products.get(type)!} title={titleType(type)} />  
        }else{
            return <div><h2>Não há produtos deste tipo</h2></div>
        }
        
    };

    return (
        <div className={styles.modelPage}>
            {renderProductTypeList(splitProducts(props.products), "Buque")}
        </div>
    );
};

interface DispatchProps {}

const mapStateToProps = (state: ApplicationState): BouquetPageProps => ({
  products: state.products
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BouquetPage);
