import React from 'react';
import Feature from './feature';

const PriceOption = ({pricing}) => {
    const {name, price, description, features} = pricing
    return (
        <div className='flex flex-col border-2 border-gray-400 rounded-2xl p-4 bg-amber-200 mx-5'>
        {/* card header */}
        <div>
            <h1 className="text-5xl">{name}</h1>
            <h2 className="text-4xl font-semibold">{price}</h2>
        </div>
        {/* card body */}
        <div className='bg-amber-400 rounded-2xl p-4 text-lg mt-10 flex-1'>
            <p>{description}</p>

            {
                features.map((feature, index)=>
                     <Feature key={index} 
                feature = {feature}
                ></Feature>)
            }

            

        </div>
        <button className="btn mt-8 bg-black text-white w-full">subscribe</button>
            
        </div>
    );
};

export default PriceOption;