import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dripSingle } from '../utils/dripSignal';

const PatientsCard = ({data}) => {
  const [color1, setColor1] = useState(false);
  const [show ,setShow] = useState(false);
  const navigate = useNavigate();
  function drip (setColor1 , setShow){
    if(!color1) {
      dripSingle(setColor1,setShow);
    }
  }
  const style1 = {
    backgroundColor: color1 ? "red" : "white"
  }
  const style2 = {
    backgroundColor: (!color1) ? "green" : "white"
  }
  return (
    <>
    {show &&  <div className='w-screen h-screen bg-slate-400 bg-opacity-70 absolute left-0 top-0 z-30'>
    <div className='absolute flex flex-col gap-10 justify-center items-center w-3/12 h-[80%]   top-10 left-[50%] translate-x-[-50%] rounded-lg z-10 bg-gray-200 '>
      <h1 className='text-3xl font-bold'>Alert !!</h1>
      <div className=' flex flex-col items-center gap-10'>
      <i className="fa-solid fa-circle-exclamation text-[200px] text-red-600"></i>
      <div className='text-center'>
      <p className='font-semibold'>Patient : {data.name}</p>
      <p className='font-semibold'>Id :{data.id}</p>
      <h1 className=' text-lg font-semibold px-20 text-center '><mark className='bg-[#90e0ef]'>Drip will almost finished !!</mark>
      <i 
      onClick={()=>setShow(false)} 
      class="fa-solid fa-circle-exclamation ml-4 text-red-600 cursor-pointer"></i>
      </h1>
      </div>
      </div>
    </div>
    </div>
     }
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex">
        <div className="">
          <img className="h-48 w-full object-cover " src={import.meta.env.VITE_PATIENTLOGO} alt="patient"/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.name}</div>
          <p className="my-2 text-gray-600">{data.dieases}</p>
          <div>
            <p className='text-xs font-semibold text-gray-800'>Drip status</p>
          <div
          onClick={() => {
            if(!color1)setColor1(!color1);
            drip(setColor1,setShow);
          }}
          className='w-16 h-7 border border-black flex cursor-pointer rounded-md mb-3'
        >
          <div
            className="h-full grow  rounded-l-md"
            style={style2}
          ></div>
          <div
            className='h-full grow rounded-r-md'
            style={style1}
          ></div>
        </div>
          </div>
        
          <button 
          onClick={()=>{navigate("patient/"+data.id , {
            state:data
          })}}
          className=" bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Details</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default PatientsCard;
