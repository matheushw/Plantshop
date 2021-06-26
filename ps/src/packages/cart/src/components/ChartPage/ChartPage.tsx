import React, { ReactElement } from 'react'
import ChartProduct  from '../ChartProduct/ChartProduct'
import * as styles from './styles'

export interface ChartPageProps{
  finalPrice?: string
}

const ChartPage: React.FC<ChartPageProps> = ({ finalPrice }) => {

  const mockProducts = (name: string, price: string) =>{
    var products: ReactElement[] = [];
    for(var i=0;i<3;i++){
      products.push(
        <ChartProduct 
          img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
          name = {name}
          price = {price}
        />
      );
    }

    return products;
  }

  return(
    <div className={styles.productDisplay}>
      <h1>Seus Produtos</h1>

      <div className={styles.productList}>
        {mockProducts("Planta X", "19.99")}
      </div>

      <h1>Total: {finalPrice}</h1>
    
      <div>
        <button>Continuar comprando</button>
        <button>Finalizar compra</button>
      </div>
    </div>
  );
}

export default ChartPage;