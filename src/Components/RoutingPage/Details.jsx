import React from 'react';
import { NavLink, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const {productId}= useParams();
    
    const data = useLoaderData();
    const id = parseInt(productId)
    const product = data.find(product=>product.productId === id)
    const{ title, description,image, details}=product

    
    return (
        <div>
          <div className='bg-base-200 pt-8 text-center'>
          <h1 className="text-5xl font-bold  text-green-800">{title}</h1>
          <p className='py-6'>{description}</p>
          </div>
            
            

            <div className="hero bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold"></h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <NavLink to={'/login'} className="btn rounded-lg text-white bg-green-400">Create Account</NavLink>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Details;