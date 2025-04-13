import React, { use } from 'react';
import PriceOption from '../PriceOption/PriceOption';

const PricingOptions = ({PricingPromise}) => {
    const pricingData = use(PricingPromise);
    // console.log(pricing);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>

            {
                pricingData.map(pricing =>
                     <PriceOption key={pricing.id} 
                     pricing = {pricing}
                     ></PriceOption>)
            }

        </div>
    );
};

export default PricingOptions;