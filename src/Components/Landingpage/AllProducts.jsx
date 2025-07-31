import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const AllProducts = () => {

   const [products, setProducts]= useState([]);
   useEffect(()=>{
    fetch('../../../products.json')
    .then(res => res.json())
    .then(data=>setProducts(data))
   },[])
   const{title, description, image, productId}= products;

    return (
        <div>
          <div className="max-w-4xl mx-auto text-center mt-10">
             <h1 className="text-4xl font-bold text-green-800 mb-4">Our Products</h1>
  <p className="text-gray-600 text-lg mb-2 font-serif">
    Explore a wide range of services offered by X Digital Banking System to make your financial journey easier and smarter. From savings and student accounts to loans and utility bill cashback — everything you need, all in one place.
  </p>
          </div>
           
           <div className="grid grid-cols-3 max-w-7xl mx-auto mt-8 pb-5">
            {
              products?.map(product=> <div key={product.productId} className="mt-3">
              <div className="card bg-base-100 w-96 p-2 shadow-sm">
  <figure>
    <img
      src={product.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p>{product.description}</p>
    <div className="card-actions justify-center">
      <NavLink to={`/details/${product.productId}`} className="btn text-white rounded-md bg-green-500">View Details</NavLink>
    </div>
  </div>
</div>
              </div>)
            }
           </div>

        </div>
          
    );
};

export default AllProducts;