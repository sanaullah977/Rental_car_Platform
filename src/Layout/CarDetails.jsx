import { Link, Navigate, useLoaderData, useNavigate, useParams } from "react-router";



import SubTrending from "./SubTreanding";
import Swal from "sweetalert2";

const CarDetails = () => {
  const carProducts = useLoaderData();
  const { _id } = useParams();
  const cars = carProducts.result
  console.log(cars)
  console.log(_id)
  const nevigate = useNavigate()
  // const carProducts = petcarProductss?.find((p) => p._id == _id);
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/rentcar/${cars._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            nevigate("/");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  
  const handleClick = () => {
    if (!carProducts) {
      alert("carProducts not found!");
      return;
    }
    
    const existingList = JSON.parse(localStorage.getItem('PetCart')) || [];
    let updateList = [];
    
    if (Array.isArray(existingList) && existingList.length > 0) {
      updateList = [...existingList, carProducts];
    } else {
      updateList = [carProducts];
    }
    localStorage.setItem( 'PetCart', JSON.stringify(updateList));
  };

  return (
    <div className="bg-blue-100 rounded-3xl">
      <div className="items-center md:w-[1000px] w-[448px]   rounded-3xl p-10  my-10 justify-center mx-auto">
        <div className="flex md:flex-row flex-col mx-auto md:w-[1400px] w-[448px] p-5 gap-5 justify-center items-center m-5">
          <img className="h-[300px] rounded-4xl shadow-md " src={cars.hostedImageUrl} alt="" />
          <div className=" flex flex-col">
            <div className=" md:w-[1020px] w-[448px] m-10 mb-5">
              <div className="flex items-center-safe gap-3">
                <h2 className="font-bold text-4xl">{cars.carName}</h2>
                {/* <div className="flex  py-8 gap-1 items-center">
                  <img className="h-[20px]" src={star} alt="" />
                  <span>{carProducts.rating}</span>
                </div> */}
              </div>
              <span className="text-gray-600 flex">
                $<span className=" text-3xl"> {cars.rentPrice}</span>
              </span>
            </div>
            <div className="m-10 mb-5">
              <p className=" text-gray-400">{cars.description}</p>
            </div>

            <div className="flex   flex-col">
              <div className="flex gap-50 m-10 mb-5">
                <div className="flex gap-1 items-center">
                  <span className="font-bold text-[18px]">Category : </span>
                  <span className="font-semibold text-gray-500">
                    {cars.category}
                  </span>
                </div>

                <div className="flex gap-1  items-center">
                  <span className="font-bold text-[18px]">
                    Booking No. :
                  </span>
                  <span className="font-semibold text-gray-500">
                    {}
                  </span>
                </div>
              </div>
              <div className="flex  m-10 mb-5 ">
                <div className="flex flex-col">
                  <span className="text-gray-400">
                    Provided By : {cars.providerName}
                  </span>
                  <span className="text-gray-400">
                    Email:{cars.providerEmail}
                  </span>
                </div>

                <button
                  onClick={handleClick}
                  className="btn bg-green-400 mx-auto text-white"
                >
                 Book now
                </button>
              </div>

             <div>
               <Link to={`/updatadb/${_id}`}><button className="btn bg-green-400 ml-10 mx-auto text-white"> Update </button></Link>
                <button onClick={handleDelete} className="btn bg-green-400 ml-10 mx-auto text-white"> Delete </button>
             </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SubTrending></SubTrending> */}
    </div>
  );
};

export default CarDetails;
