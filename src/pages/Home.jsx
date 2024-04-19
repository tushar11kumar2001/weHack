import React, { useEffect } from 'react'
import Side from '../component/Side'
import { Outlet, useNavigate } from 'react-router-dom'

import { useProfileContext } from '../utils/profileContext'

const Home = () => {
  const profileContext = useProfileContext()
  const navigate = useNavigate()
  const userobj = profileContext.user;
   useEffect(()=>{
    if(!(userobj.uid)) navigate("/login")
   },[userobj])
  return (
    <div className=''>
      <Side/>
      <Outlet/>
    </div>
  )
}

export default Home
