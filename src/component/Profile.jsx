import React, { useEffect, useState } from 'react';
import { useProfileContext } from '../utils/profileContext';
import { useFirebaseContext } from '../utils/firebaseContext';


const Profile = () => {
    const profileContext = useProfileContext();
    const firebaseContext = useFirebaseContext();
    const [data,setData] = useState([])
    useEffect(()=>{
        firebaseContext.getUser(profileContext.user.uid).then((result)=> setData(result.docs[0].data()))
        
    },[])
  return (
    <div className="bg-white p-6 pl-32 shadow-md w-full h-screen"

    >
      <div className="flex items-center">
        <img src={profileContext.user.photoURL} alt="Avatar" className="w-56 h-48 rounded-[50%] mx-8" />
        <div>
          <h2 className="text-5xl font-semibold">{data.username}</h2>
          <p className="text-gray-600 text-xl">{data.designation}</p>
        </div>
      </div>
      <div className=' pl-14'>
      <div className="mt-6 ">
        <h3 className="text-gray-800  font-semibold text-xl ">Contact Information</h3>
        <p className="text-gray-800 text-lg"> <span className='text-black'>Email: </span>{data.email}</p>
        <p className="text-gray-800 text-lg"> <span className='text-black'>Phone: +91 </span>{data.mobile}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-gray-800 text-base font-semibold">Address</h3>
        <p className="text-gray-600">{data.address}</p>
      </div>
      <div className="mt-6">
        <h3 className="text-gray-800 text-base font-semibold">Shift</h3>
        <p className="text-gray-600">{data.shift?data.shift:"not updated"}</p>
      </div>
      </div>
    </div>
  );
};

export default Profile;
