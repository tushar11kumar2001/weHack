import React from "react";
import { NavLink } from "react-router-dom";
import { useFirebaseContext } from "../utils/firebaseContext";

const Side = () => {
    const firebase = useFirebaseContext();
    function signOut(){
       firebase.logout()
    }
  return (
    <aside className="bg-[#669bbc] text-white h-screen w-32 flex flex-col justify-between fixed z-10">
      <div className="p-4">
        <h2 className="text-3xl font-bold text-center pr-8">
          <i className="fa-solid fa-heart-pulse"></i>
        </h2>
        <nav>
          <ul className="mt-4">
            <li className="py-2">
              <NavLink 
              style={({isActive})=>isActive?{color:"blue"}:{color:"white"}}
              to="/" 
              className="hover:text-gray-300">
                Patients
              </NavLink>
            </li>
            <li className="py-2">
              <NavLink 
              style={({isActive})=>isActive?{color:"blue"}:{color:"white"}}
              to="/home/profile" 
              className="hover:text-gray-300">
                Profile
              </NavLink>
            </li>
            <li className="py-2">
              <p
               className="hover:text-gray-300 cursor-pointer"
               onClick={signOut}
               >Logout</p>
            </li>
          </ul>
        </nav>
      </div>
      <div className="p-4">
        <p className="text-sm">Medico Digital</p>
        <p className="text-sm mt-2">&copy; 2024</p>
      </div>
    </aside>
  );
};

export default Side;
