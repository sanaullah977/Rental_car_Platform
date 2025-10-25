import { Link, useLoaderData, useParams } from "react-router";
import star from "../assets/icon-ratings.png";

import { toast } from "react-toastify";
import SubTrending from "./SubTreanding";

const EquipmentDetails = () => {
  const petProducts = useLoaderData();
  const { serviceId } = useParams();
  const product = petProducts?.find((p) => p.serviceId == serviceId);
  const handleClick = () => {
    if (!product) {
      alert("Product not found!");
      return;
    }
    const notify = () => toast("Wow so easy!");
    const existingList = JSON.parse(localStorage.getItem('PetCart')) || [];
    let updateList = [];
    
    if (Array.isArray(existingList) && existingList.length > 0) {
      updateList = [...existingList, product];
    } else {
      updateList = [product];
    }
    localStorage.setItem( 'PetCart', JSON.stringify(updateList));
  };

  return (
    <div className="bg-base-300 rounded-3xl">
      <div className="items-center md:w-[1000px] w-[448px]   rounded-3xl p-10  my-10 justify-center mx-auto">
        <div className="flex md:flex-row flex-col mx-auto md:w-[1400px] w-[448px] p-5 gap-5 justify-center items-center m-5">
          <img className="h-[300px] rounded-4xl shadow-md " src={product.image} alt="" />
          <div className=" flex flex-col">
            <div className=" md:w-[1020px] w-[448px] m-10 mb-5">
              <div className="flex items-center-safe gap-3">
                <h2 className="font-bold text-4xl">{product.serviceName}</h2>
                <div className="flex  py-8 gap-1 items-center">
                  <img className="h-[20px]" src={star} alt="" />
                  <span>{product.rating}</span>
                </div>
              </div>
              <span className="text-gray-600 flex">
                $<span className=" text-3xl"> {product.price}</span>
              </span>
            </div>
            <div className="m-10 mb-5">
              <p className=" text-gray-400">{product.description}</p>
            </div>

            <div className="flex   flex-col">
              <div className="flex gap-50 m-10 mb-5">
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-[18px]">Category : </span>
                  <span className="font-semibold text-gray-500">
                    {product.category}
                  </span>
                </div>

                <div className="flex gap-1  items-center">
                  <span className="font-bold text-[18px]">
                    Slot Available :
                  </span>
                  <span className="font-semibold text-gray-500">
                    {product.slotsAvailable}
                  </span>
                </div>
              </div>
              <div className="flex  m-10 mb-5 ">
                <div className="flex flex-col">
                  <span className="text-gray-400">
                    Provided By : {product.providerName}
                  </span>
                  <span className="text-gray-400">
                    Email:{product.providerEmail}
                  </span>
                </div>

                <button
                  onClick={handleClick}
                  className="btn bg-green-400 mx-auto text-white"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubTrending></SubTrending>
    </div>
  );
};

export default EquipmentDetails;
