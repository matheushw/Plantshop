import React, { ReactElement } from 'react'
import ProfileInfo from '../ProfileInfo';
import PurchaseInfo from '../PurchaseInfo';
import * as styles from './styles'


export interface ProfilePageProps{}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  const mockPurchases = (number: number, date: string, price: string) =>{
    var purchases: ReactElement[] = [];
    for(var i=0;i<3;i++){
      purchases.push(
        <PurchaseInfo 
          number = {(number+i)}
          date = {date}
          price = {price}
        />
      );
    }

    return purchases;
  }

  return (
    <div>
      <ProfileInfo
      customerName={"Madu"}
      email={"seuemail"}
      cellphone={"12345678"}
      street={"Rua 1"}
      number={"1940"}
      cep={"12345678"}
      city={"São Paulo"}
      state={"SP"}
      country={"Brasil"}/>
      <div className={styles.purchaseList}>
        <h1>Meus Pedidos</h1>
        {mockPurchases(1, "02/02/2020", "19.99")}
      </div>
    </div>
    
  );
}

export default ProfilePage;