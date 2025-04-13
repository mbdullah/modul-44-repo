import React, { use } from 'react';
import PriceOption from '../PriceOption/PriceOption';
import DaisyPrice from '../DaisyPrice/DaisyPrice';

const PricingOptions = ({PricingPromise}) => {
    const pricingData = use(PricingPromise);
    // console.log(pricing);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2'>

            {
                pricingData.map(pricing =>
                     <PriceOption key={pricing.id} 
                     pricing = {pricing}
                     ></PriceOption>)
            }

            {
                pricingData.map(pricing => <DaisyPrice key={pricing.id} pricing = {pricing}></DaisyPrice>)
            }

        </div>
    );
};

export default PricingOptions;