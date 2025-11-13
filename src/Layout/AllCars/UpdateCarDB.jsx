import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router";

const UpdateCarDB = () => {
  const data = useLoaderData();
  console.log(data);

  const cars = data.result;
  console.log(cars);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      carName: e.target.carName.value,
      category: e.target.category.value,
      description: e.target.description.value,
      hostedImageUrl: e.target.hostedImageUrl.value,
    };

    fetch(`http://localhost:3000/rentcar/${cars._id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })
    
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/cardetails/${cars._id}`);
        toast.success("Successfully updated!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card my-20 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Update cars</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium">Car Name</label>
            <input
              type="text"
              defaultValue={cars.carName}
              name="carName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={cars.category}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Luxury">Luxury</option>
              <option value="Electric">Electric</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Description</label>
            <textarea
              defaultValue={cars.description}
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div>
            <label className="label font-medium">Thumbnail URL</label>
            <input
              type="url"
              name="hostedImageUrl"
              defaultValue={cars.hostedImageUrl}
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <button
           
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-blue-500 to-gray-200 hover:from-pink-600 hover:to-red-700"
          >
            Update cars
          </button>
          <Link to={`/cardetails/${cars._id}`}>
            <button className="btn w-full  mt-6 rounded-full bg-gray-100 hover:bg-gray-300">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateCarDB;
