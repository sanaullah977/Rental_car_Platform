import React from 'react';
import EquipmentDetails from '../equipmentDetails';
import Navber from '../../Components/Navber';
import { Outlet } from 'react-router';

const EquipmentLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <EquipmentDetails></EquipmentDetails>
        </div>
    );
};

export default EquipmentLayout;