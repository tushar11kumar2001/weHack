import React, { useState } from 'react'
import { dripSingle } from '../utils/dripSignal';

const PatientProfile = ({ data , show }) => {
  const [color1, setColor1] = useState(false);
  const { age, dieases, gender, height, id, mobile, name, weight } = data;
  console.log(age, dieases, gender, height, id, mobile, name, weight);

  function drip (setColor1 , show){
    if(!color1) {
      dripSingle(setColor1,show);
      console.log("call");
    }
  }
  const style1 = {
    backgroundColor: color1 ? "red" : "white"
  }
  const style2 = {
    backgroundColor: (!color1) ? "green" : "white"
  }
  return (
    <div>
      
      <div className='w-72 p-7 rounded-xl shadow-lg '>
        <img
          className='border  mx-auto w-2/3'
          src={gender === "Male" ? import.meta.env.VITE_MALEPATIENTLOGO : import.meta.env.VITE_FEMALEPATIENTLOGO}
          alt="tushar" />
        <div className=' mt-3'>
          <h2 className='text-center text-blue-600 text-2xl font-bold mb-3'>{name}</h2>
          <p className='pl-12'><span className='mr-2 font-semibold text-gray-700'>Gender</span><span className='ml-5 font-semibold'>{gender}</span></p>
          <p className='pl-12'><span className='mr-8 font-semibold text-gray-700'>Age</span><span className='ml-5 font-semibold'>{age}year</span></p>
          <p className='pl-12'><span className='mr-3 font-semibold text-gray-700'>Height</span><span className='ml-5 font-semibold'>{height} cm</span></p>
          <p className='pl-12'><span className='mr-2 font-semibold text-gray-700'>Weight</span><span className='ml-5 font-semibold'>{weight} Kg</span></p>
        </div>
        <p className='mt-3 font-semibold text-lg'>Dieases : {dieases}</p>
        <p className='mt-3 font-semibold text-lg'>Contact : +91 {mobile}</p>
        <div
          onClick={() => {
            if(!color1)setColor1(!color1);
            drip(setColor1,show);
          }}
          className='w-16 h-7 border border-black flex cursor-pointer rounded-md'
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
    </div>
  )
}

export default PatientProfile
