import React, { ReactNode } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import ManageButton from '../../../../../base-components/ManageButton';
import InventoryList from '../InventoryList';
import { ApplicationState, ProductModel } from '../../../../../store/types';
import * as styles from './styles'

export interface InventoryPageProps{
  products: ProductModel[];
}

const InventoryPage: React.FC <InventoryPageProps> = (props) => {
  
  
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
  }

  const renderProductTypeList = (products:Map<string, ProductModel[]>) => {
    const lists: ReactNode[] = [];

    products.forEach((productsType, title) => {
      lists.push(<InventoryList title={title} products={productsType} />);
    });

    return (
      <>
        {lists}
      </>
    )
  }

  return(
    <div className={styles.mainPage}>
      <h1>Estoque</h1>
      <ManageButton text={"Adicionar novo produto"} />
      {renderProductTypeList(splitProducts(props.products))}
    </div>
  );
}

interface DispatchProps {}

interface StateProps{
  products: ProductModel[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  products: state.products
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(InventoryPage);