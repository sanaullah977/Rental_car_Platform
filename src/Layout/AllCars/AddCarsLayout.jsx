import React from 'react';
import Navber from '../../Components/Navber';
import AddCars from './AddCars';
import Footer from '../../Components/Footer';

const AddCarsLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <AddCars></AddCars>
            <Footer></Footer>
            
        </div>
    );
};

export default AddCarsLayout;