import React from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { use } from "react";
import img from "../../assets/IMG.jpg";
import Navber from "../../Components/Navber";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const MyProfile = () => {
  const handleImage =(e) => {
    
     e.preventDefault();
     const form = e.target;
     const photo =form.photo.value;

    updateProfile(auth.currentUser,{
      
       photoURL:photo
    })
    .then(() => {
      console.log('Update Done')
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  const { user } = use(AuthContext);
  return (
    <div>
      <Navber></Navber>
      <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={user?.photoURL}
      className="max-w-sm rounded-full shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{user?.displayName}</h1>
      <p className="py-6 flex">
       <div className=" flex flex-col">
        <span className=" px-5">19</span>
        <span className=" px-5">Posts</span>
       </div>
       <div className=" flex flex-col">
        <span className=" px-5">19</span>
        <span className=" px-5">Follower</span>
        
       </div>
       <div className=" flex flex-col">
        <span className=" px-5">19</span>
        <span className=" px-5">Following</span>

       </div>
      </p>
      
    </div>
    <button type="input" onClick={handleImage} className="btn btn-ghost">Update Your Image</button>
  </div>
  
</div>

    </div>
    
  );
};

export default MyProfile;
