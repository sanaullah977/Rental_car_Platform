
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { use } from 'react';
import {  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import  { auth } from '../firebase/firebase.config';



const provider = new GoogleAuthProvider();
const Register = () => {
  
  const handleGoogle = () => {
      // 
      signInWithPopup(auth,provider)
      .then(result =>{
        console.log(result);
      })
      .catch(error=>{
        console.log(error)
      })
    }
  const {createUser , setUser,updateUser} =use(AuthContext);
  const handleRegister=(e)=>{
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name =form.name.value;
    const photo =form.photo.value;
    const email =form.email.value;
    const password =form.password.value;
    
    console.log({name,photo,email,password})
    

    createUser(email,password,name,photo)
    .then((result) => {
      const user = result.user;
      updateUser({displayName:name ,photoURL:photo})
      .then(() => {
      setUser({...user,displayName:name ,photoURL:photo});
    })
    .catch((error) => {
      console.log(error);
      setUser(user);
    });
      
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  }); 

  };
    return (
        <div className="flex justify-center min-h-screen items-center bg-base-200 h-screen">
        
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-semibold  flex justify-center py-4">Register Your Account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input type="text" className="input" placeholder="Name" name='name'/>
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" name="photo" />
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" name='email' />
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" name="password" />
            
            <button type="submit" className="btn btn-neutral mt-4">Register</button>
            
            <p className='flex justify-center'>Don,t Have a Account ? <Link to='/auth/login' className="text-red-500">Log In</Link></p>
          </fieldset>
          <span className='flex justify-center border-b-2 border-gray-200'>OR</span>
          <span onClick={handleGoogle} className="btn btn-neutral mt-4">Sign In With Google</span>
        </form>
      </div>
    </div>
    );
};

export default Register;