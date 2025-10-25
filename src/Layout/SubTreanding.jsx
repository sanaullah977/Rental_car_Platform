import React from 'react';


import { Link, useLoaderData } from 'react-router';




const SubTrending = () => {
    
    const petProducts= useLoaderData ()
    const randomArray = (arr) =>{
        return arr.sort(() => Math.random() - 0.5);
    };

    const productsView = randomArray(petProducts).slice(0,4);

    return (
        <div className='flex flex-col justify-center items-center bg-gray-100 p-10'>
            
            <h1 className='font-bold text-4xl'>Pet Equipments</h1>
           

 <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-10 items-center  justify-center md:p-10 sm:p-5 p-0 '>

  {
   productsView.map(product => (
    <Link to={`/equipmentdetails/${product.serviceId}`}> <div key={product.serviceId} className="card my-5 border-2 bg-white w-72 h-80 shadow-md hover:scale-110 transition ease-in-out">
       <figure className=''>
         <img className='h-[180px] w-[220px] p-5'
           src={product.image}
           alt="Apps" />
       </figure>
       <div className="card-body">
         <h2 className="card-title">
           {product.serviceName}
         </h2>
         <h2 className="">
           {product.providerName}
         </h2>
         <h2 className="">
           {product.providerEmail}
         </h2>
         <div className="card-actions justify-between">
           <div className="badge badge-outline  text-green-600 bg-green-100">{product.category}</div>
           <div className="badge badge-outline  text-yellow-600 bg-yellow-100">{product.rating}</div>
         </div>
       </div>
     </div></Link>
   ))
  }
 </div>

           
           
            
        </div>
    );
};

export default SubTrending;