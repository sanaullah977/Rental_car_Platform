import React from "react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
const provider = new GoogleAuthProvider();
const Login = () => {
  // const handleReset = (e) => {
  //   e.preventDefault();
  //   const form = e.currenUser;
  //   const email = form.email.value;

  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       console.log("reset Now");
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const { signIn } = use(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
  };
  return (
    <div className="flex justify-center min-h-screen items-center bg-base-200 h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <h2 className="font-semibold  flex justify-center ">
          Login Your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <div>
              <a  className="link link-hover">
                Forgot password?
              </a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
            <p className="flex justify-center">
              Don,t Have a Account ?{" "}
              <Link to="/auth/register" className="text-red-500">
                Register
              </Link>
            </p>
          </fieldset>
          <span className="flex justify-center border-b-2 border-gray-200">
            OR
          </span>
          <span onClick={handleGoogle} className="btn btn-neutral mt-4">
            Sign In With Google
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
