import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import PatientProfile from './PatientProfile';
import BMI from './BMI';

const PatientDetails = () => {
    const {state} = useLocation();
    // console.log(state);
    const [show ,setShow] = useState(false);
  return (
    <>
    <h1 className='text-3xl pl-40 pt-16 font-semibold mb-2'>Patient Details</h1>
    <div className=' flex gap-48 pl-40  '>
    {show &&  <div className='w-screen h-screen bg-slate-400 bg-opacity-70 absolute left-0 top-0 z-30'>
      <div className='absolute flex justify-center items-center w-3/12 h-[80%]   top-10 left-[50%] translate-x-[-50%] rounded-lg z-10 bg-gray-200 '>
        <img src={import.meta.env.VITE_TICKIMG} alt="tick" className='absolute top-0 rounded-t-lg'/>
        <h1 className='absolute bottom-20 text-3xl font-semibold'>Completed !! 
        <i
        onClick={()=>setShow(false)} 
        className="fa-solid fa-circle-check text-green-500 ml-3 cursor-pointer"></i> </h1>
      </div>
      </div>
       }
      <PatientProfile data={state} show={setShow}/>
      <div>
      <BMI weight={state.weight} height={state.height}/>
      </div>
      
  
    </div>
    </>
  )
}

export default PatientDetails
