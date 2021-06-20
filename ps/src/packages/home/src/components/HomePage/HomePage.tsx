import React from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

import * as styles from './styles';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div>
        <h1>Promoções</h1>
        <div className={styles.productDisplay}>
          <HomeProduct 
            img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
            name = "Planta X"
            price = "19.99"
          />

          <HomeProduct 
            img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
            name = "Planta X"
            price = "19.99"
          />

          <HomeProduct 
            img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
            name = "Planta X"
            price = "19.99"
          />

          <HomeProduct 
            img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
            name = "Planta X"
            price = "19.99"
          />

          <HomeProduct 
            img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
            name = "Planta X"
            price = "19.99"
          />

          <HomeProduct 
            img = "https://multimidia.gazetadopovo.com.br/media/info/2017/201710/plantas-problemas-saudavel.png"
            name = "Planta X"
            price = "19.99"
          />
        </div>
    </div>
  );
};

export default HomePage;
