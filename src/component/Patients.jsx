import React, { useState } from 'react'
import Navbar from './Navbar'

import { Outlet } from 'react-router-dom'
import { useProfileContext } from '../utils/profileContext'



const Patients = () => {
const profileContext = useProfileContext();
  
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Patients
