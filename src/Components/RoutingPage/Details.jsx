import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {

    const{productId}= useParams();
    const data = useLoaderData();
    console.log(productId);
    console.log(data);
    //const pDetails= data.
    //(pDetails => pDetails.productId === 3);
    //const{ productId:currentproductId, title, description, image, details,services, features, benefits, offers}=pDetails;
    //const selectedProduct = data.find(item => item.productId === parseInt(productId));
    
    return (
        <div>
            how mow cow {productId}

            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Details;