import React from 'react';
import Feature from './Feature';

const DaisyPrice = ({pricing}) => {
    const {popular, price, name, features} = pricing
    return (
        <div className="flex flex-col shadow-sm mb-10 mx-5">
        <div className="card-body">
          {
            popular && <span className="badge badge-xs badge-warning">Most Popular</span>
          }
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">{price}</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs flex-1">
            {
                features.map((feature, index) => <Feature key={index} feature = {feature}></Feature>)
            }
          </ul>
          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    );
};

export default DaisyPrice;