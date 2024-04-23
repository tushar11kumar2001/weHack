import { useState,useRef, useEffect } from "react";
import { useFirebaseContext } from "../utils/firebaseContext";
import { useProfileContext } from "../utils/profileContext";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate()
  const [show, setShow] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const mobileRef = useRef();
  const designationRef = useRef();
  const addressRef = useRef();
  const firebase = useFirebaseContext();
  const profileContext = useProfileContext();
  const userobj = profileContext.user
  useEffect(()=>{
    if((userobj.uid)) navigate("/");
    
  },[userobj])
  function signin(){
    if(show){
        firebase.login(emailRef.current.value,passwordRef.current.value);
    }
    else{
        firebase.createNewUser(emailRef.current.value,passwordRef.current.value,nameRef.current.value,mobileRef.current.value,designationRef.current.value,addressRef.current.value);
        
    }
  }
  function handleToggle(){
    setShow(!show);
 
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={import.meta.env.VITE_ICONURL}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            {show ? "Sign in to your account" : "Welcome !!"}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
            {!show && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your name
                </label>
                <div className="mt-2">
                  <input
                    ref = {nameRef}
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Enter your email
              </label>
              <div className="mt-2">
                <input
                 ref = {emailRef}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            {!show &&(
                <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your mobile
                </label>
                <div className="mt-2">
                  <input
                    ref = {mobileRef}
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            )}
            {!show &&(
                <div>
                <label
                  htmlFor="designation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Designation
                </label>
                <div className="mt-2">
                  <input
                    ref = {designationRef}
                    id="designation"
                    name="designation"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            )}
            {!show &&(
                <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Address
                </label>
                <div className="mt-2">
                  <input
                    ref = {addressRef}
                    id="address"
                    name="address"
                    type="text"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
            </div>
            )}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  {show && (
                    <a
                      href="#"
                      className="font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot password?
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <input
                  ref = {passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
              onClick={signin}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {show ? "Sign in" : "Sign up"}
              </button>
            </div>
          </form>

          {show ? (
            <p 
            className="mt-10 text-center text-sm text-gray-500"
            onClick = {handleToggle}
            >
              New Join{" "}
              <span
                
                className="font-semibold leading-6 cursor-pointer text-indigo-600 hover:text-indigo-500"
              >
                Sign up
              </span>
            </p>
          ): <p  className="mt-10 text-center text-sm text-gray-500 cursor-pointer" onClick = {handleToggle}><i className="fa-solid fa-angles-left"></i></p>}
        </div>
      </div>
    </>
  );
}
