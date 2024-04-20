import React from 'react'
import { useLocation } from 'react-router-dom'
import PatientProfile from './PatientProfile';

import { bmiFinder } from '../utils/bmiFinder';
import Card from './Card';
const PatientDetails = () => {
  const { state } = useLocation();
  const bmi = bmiFinder(state.weight, state.height)
  // console.log(state);

  return (
    <>
      <h1 className='text-3xl pl-40 pt-16 font-semibold mb-2'>Patient Details</h1>
      <div className=' flex gap-28 pl-40  '>

        <PatientProfile data={state} />
        <div className='grid grid-cols-3 gap-10'>
          <Card res={bmi} title="Body Mass Index" img={import.meta.env.VITE_BMI} unit="kg/m²"
            value={(bmi >= 0 && bmi <= 18.5) ? "Underweight" : (bmi >= 18.5 && bmi <= 25) ? "Normal" : (bmi >= 25 && bmi <= 30) ? "Overweight" : "Obesity"}
          />
          <Card  title="Heart Rate" img={import.meta.env.VITE_HEARTRATE} />
          <Card  title="Blood Status" img={import.meta.env.VITE_BLOODSTATUS}/>
          <Card  title="Sugar Level" img={import.meta.env.VITE_SUGARLEVEL}/>
          <Card  title="Hemoglobin" img={import.meta.env.VITE_HEMOGLOBIN}/>

        </div>


      </div>
    </>
  )
}

export default PatientDetails
