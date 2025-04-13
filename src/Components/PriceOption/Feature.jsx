import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <p className='flex mt-4'><CircleCheckBig className='mr-3'></CircleCheckBig>{feature}</p>
    );
};

export default Feature;