import React, { useState } from 'react';
import AddPatients from './AddPatients';
import { useProfileContext } from '../utils/profileContext';

const Navbar = () => {
  const profileContext = useProfileContext();
  const [searchValue,setSearchValue] = useState("");
  // console.log(searchValue);
  return (
    <nav className="bg-[#90e0ef] shadow-lg">
      <div className="pl-32">


          <div className="py-3 px-10 pr-16 flex items-center justify-between ">
          <div className="ml-4 flex-shrink-0">
              {/* Search bar */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-300">
                  {/* Search icon */}
                  <i 
                  onClick={()=>{
                    let filter = profileContext.x.filter((e)=>e.name.toUpperCase()===searchValue.toUpperCase())
                    console.log(filter);
                    profileContext.setX(filter)
                  }}
                  className="fa-solid fa-magnifying-glass text-black"></i>
                </span>
                <input 
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:placeholder-gray-400 sm:text-sm" placeholder="Search" type="search"/>
              </div>
            </div>
            <div className='flex gap-10 '>
            <div className="flex-shrink-0">
              {/* Add button */}
             <AddPatients/>
            </div>
   
            <div className="ml-4 flex-shrink-0">

              <div className="relative">
                <button className="  p-1 rounded-full text-gray-400 " id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <img className="h-8 w-8 rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" alt="Profile" />
                </button>

              </div>
            </div>
            </div>
          </div>
       
      </div>
    </nav>
  );
};

export default Navbar;
