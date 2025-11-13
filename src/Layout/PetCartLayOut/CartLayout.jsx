import React from 'react';
import Navber from '../../Components/Navber';
import Footer from '../../Components/Footer';
import Cart from './Cart';


const CartLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Cart></Cart>
        
            <Footer></Footer>
            
        </div>
    );
};

export default CartLayout;