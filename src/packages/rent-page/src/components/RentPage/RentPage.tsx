import React, { ReactNode } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState, ProductModel } from '../../../../../store/types';
import RentProductList from '../RentProductsList';
import ReactNotification, { store } from 'react-notifications-component';
import * as styles from './styles';
import { NotificationType } from '../utils';
export interface RentPageProps{
  products: ProductModel[];
}

const RentPage: React.FC<RentPageProps> = ( props ) => {
  const [showNotification, setShowNotification] = useState<NotificationType>(NotificationType.NONE);

  useEffect(()=>{
    if(showNotification === NotificationType.FAILED){
      store.addNotification({
        title: "Data inválida",
        message: " ",
        type: "warning",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false
        }
      })
    } else if(showNotification === NotificationType.SUCCESSFUL) {
      store.addNotification({
        title: "Aluguel adicionado ao carrinho!",
        message: " ",
        type: "success",
        insert: "top",
        container: "top-left",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false
        }
      })
    }
    setShowNotification(NotificationType.NONE);
  }, [showNotification]);

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
      lists.push(<RentProductList setShowNotification={setShowNotification} title={title} products={productsType} />);
    });

    return (
      <>
        {lists}
      </>
    )
  }

  return(
    <div className={styles.page}>
      <h1>Aluguel</h1>
      <ReactNotification />
      {renderProductTypeList(splitProducts(props.products))}
    </div>
  );
}

interface DispatchProps {}

interface StateProps{
  products: ProductModel[];
}

const mapStateToProps = (state: ApplicationState): StateProps => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RentPage);