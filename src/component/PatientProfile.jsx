import React, { useState } from 'react'


const PatientProfile = ({ data }) => {
 
  const { age, dieases, gender, height, id, mobile, name, weight } = data;
  // console.log(age, dieases, gender, height, id, mobile, name, weight);


  return (
    <div>
      
      <div className='w-72 p-7 rounded-xl shadow-lg '>
        <img
          className='border  mx-auto w-2/3'
          src={gender === "Male" ? import.meta.env.VITE_MALEPATIENTLOGO : import.meta.env.VITE_FEMALEPATIENTLOGO}
          alt="profile" />
        <div className=' mt-3'>
          <h2 className='text-center text-blue-600 text-2xl font-bold mb-3'>{name}</h2>
          <p className='pl-12'><span className='mr-2 font-semibold text-gray-700'>Gender</span><span className='ml-5 font-semibold'>{gender}</span></p>
          <p className='pl-12'><span className='mr-8 font-semibold text-gray-700'>Age</span><span className='ml-5 font-semibold'>{age}year</span></p>
          <p className='pl-12'><span className='mr-3 font-semibold text-gray-700'>Height</span><span className='ml-5 font-semibold'>{height} cm</span></p>
          <p className='pl-12'><span className='mr-2 font-semibold text-gray-700'>Weight</span><span className='ml-5 font-semibold'>{weight} Kg</span></p>
        </div>
        <p className='mt-3 font-semibold text-lg'>Dieases : {dieases}</p>
        <p className='mt-3 font-semibold text-lg'>Contact : +91 {mobile}</p>
      
      </div>
    </div>
  )
}

export default PatientProfile
