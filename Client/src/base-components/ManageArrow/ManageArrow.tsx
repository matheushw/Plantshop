import React from 'react';

export interface ArrowProps {
  direction: string;
}

const ManageArrow: React.FC<ArrowProps> = ({ direction}) => {
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

export default ManageArrow;