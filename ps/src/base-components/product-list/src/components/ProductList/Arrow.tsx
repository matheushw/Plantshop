import React from 'react';
//import * as styles from './styles';
//import { Link } from 'react-router-dom';

export interface ArrowProps {
  direction: string;
}

const Arrow: React.FC<ArrowProps> = ({ direction}) => {
    if(direction === "left"){
        return ( 
            <div>
                <span className="material-icons-outlined" > arrow_back_ios </span>
            </div>
        );
    }else{
        return (
            <div>
                <span className="material-icons-outlined" > arrow_forward_ios </span>
            </div>
        );
    }
};

export default Arrow;