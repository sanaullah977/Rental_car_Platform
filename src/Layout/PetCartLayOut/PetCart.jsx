
import arrow from "../../assets/icon-downloads.png";
import tara from "../../assets/icon-ratings.png";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";

const PetCart = () => {
  const [order, setOrder] =useState('none')
  console.log({order})
  const [PetCart, setPetCart] =useState([])
  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('PetCart'))
    if(savedList) setPetCart(savedList)
  },[])
  const PetCartItem = (() => {
    if (order === 'price-asc') {
      return [...PetCart].sort((a,b) => a.size - b.size)
    } else if (order === 'price-desc') {
      return [...PetCart].sort((a,b) => b.size - a.size)
    } else{
      return PetCart
    }

  })()
    const handleRemove = serviceId => {
      console.log(serviceId)
      const existingList =JSON.parse(localStorage.getItem('PetCart'))
      console.log(existingList)
    const updatedList = existingList.filter(p=>p.serviceId != serviceId)
    console.log(updatedList)

    setPetCart (prev=> prev.filter(p=>p.serviceId != serviceId))
    localStorage.setItem('PetCart', JSON.stringify(updatedList));
    };

  const products= useLoaderData ();
  console.log(products)
  return (
    <div className="flex flex-col  justify-center items-center h-full bg-gray-100  p-10">
      <h2 className="text-4xl font-bold p-3">Purchased Pet Equipments</h2>
      <p className="text-gray-400 p-3">
        Explore All Trending Equipments on the Market developed by us
      </p>
      <div className="flex justify-between md:w-[1400px] w-[448px] m-10 items-center">
        <h3 className="text-2xl font-bold">{PetCart.length} Total Equipments</h3>
        <select value='none' onChange={e=> setOrder(e.target.value)}>
            <option value="none">Sort by Price</option>
            <option value="price-asc">Low-High</option>
            <option value="price-desc">High-Low</option>
          </select>
      </div>
      

        {
          PetCartItem.map(p =>(
          <div key={p.id} className="flex md:flex-row flex-col justify-between  lg:w-[1400px] md:w-[448px] bg-white rounded-2xl items-center my-2">
          
            <div className="flex items-center gap-5 p-5">
          <img className="h-12 rounded-b-lg " src={p.image} alt="" />
          <div>
            <h4 className="font-semibold text-lg">{p.serviceName}</h4>
            <div className="flex gap-3">
              <span className="badge badge-outline  text-green-600 bg-yellow-100">
                
                {p.category}
              </span>
              <span className="flex gap-1">
                <img className="h-5 " src={tara} alt="" />{p.rating}
              </span>
              <span>({p.price}MB)</span>
            </div>
          </div>
        </div>
        
        <button onClick={ () => handleRemove (p.serviceId) } className="btn  bg-blue-500 mr-3 text-white">Buy</button>
        
        </div>
          )
            
          )
        }
        
      
    </div>
  );
};

export default PetCart;
