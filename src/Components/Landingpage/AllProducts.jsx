import { useEffect, useState } from "react";


const AllProducts = () => {

   const [products, setBooks]= useState([]);
   useEffect(()=>{
    fetch('./products.json')
    .then(res => res.json())
    .then(data=>setBooks(data.data))
   },[])
   const{title, description, image}= products;

    return (
        <div>
           
           <div>
            {
              products?.map(product=> <div key={product.id}>
               <p>Title={product.title}</p>
              </div>)
            }
           </div>

        </div>
          
    );
};

export default AllProducts;