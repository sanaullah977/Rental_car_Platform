import React from 'react';
import Navber from '../../Components/Navber';
import Footer from '../../Components/Footer';
import PetCart from './PetCart';

const PetCartLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <PetCart></PetCart>
            <Footer></Footer>
            
        </div>
    );
};

export default PetCartLayout;