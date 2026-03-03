import {  useState } from "react";

import { Link, useLoaderData } from "react-router";


const AllCars = () => {
  const [search, setSearch] = useState("");
  const products = useLoaderData();
  console.log(products)
  console.log(products.data)
  const term = search.trim().toLocaleLowerCase();

  const [searchText, setSearchText] = useState("");
  const [filteredCars, setFilteredCars] = useState(products);
  console.log(filteredCars)
  const [loading, setLoading] = useState(false);
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value)
    setSearchText(value);

    setLoading(true); 

    console.log(products)
    setTimeout(() => {
      const matchedCars = products.filter((Car) => {
        console.log(Car.carName);
        return  Car.carName.toLowerCase().includes(value)

      }
       
      );
      setFilteredCars(matchedCars);
      setLoading(false); 
    }, 600); 
  };
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-10">
        <h1 className="font-bold text-4xl">Trending Cars</h1>

        <div className="flex w-[1200px] justify-between  mt-20">
          <span className="font-bold text-2xl">
            ({filteredCars.length})Car Found
          </span>
          <label className="input">
            <input
              value={searchText}
              onChange={handleSearch}
              type="Search"
              placeholder="Search"
            />
          </label>
        </div>
        {filteredCars.length == 0 && 
        <div className="flex flex-col justify-center items-center"> 
          
          <p className="font-bold text-gray-400 text-4xl py-5">
            Cars Not Found
          </p>
             </div>}
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-col-1 gap-10 items-center  justify-center md:p-10 sm:p-5 p-0 ">
          {filteredCars.map((products) => (
            <Link to={`/Cardetails/${products._id}`}>
              {" "}
              <div
                key={products.id}
                className="card  border-2 bg-base-100 w-72 shadow-sm hover:scale-110 transition ease-in-out"
              >
                <figure className="">
                  <img
                    className="h-[180px] w-[220px] p-5"
                    src={products.hostedImageUrl}
                    alt="Cars"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{products.carName}</h2>
                  <h2 className="">
           {products.providerName}
         </h2>
         <h2 className="">
           {products.providerEmail}
         </h2>

                  <div className="card-actions justify-between">
                    <div className="badge badge-outline  text-blue-600 bg-purple-100">
                      
                      {products.category}
                    </div>
                    <div className="badge badge-outline  text-gray-600 bg-gray-100">
                      
                     $ {products.rentPrice}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCars;
