import React, { useEffect } from 'react'
import PatientCard from './PatientCard'
import { useProfileContext } from '../utils/profileContext'
const PatientsGrid = () => {
    const profileContext = useProfileContext();
    // console.log("x",profileContext.x);
    let newobj2;
    for(let key in profileContext.patientList){
        if(key === profileContext.user.displayName) newobj2 = profileContext.patientList[key];
    }
    useEffect(()=>{
           if(newobj2) profileContext.setX(Object.values(newobj2))
    },[newobj2])

    // console.log(dataArr);
    // if(dataArr.length === 0) return <div className='pl-40 pt-16 '>You have not any assigned patient, Please add new patient</div>
  return (
    <div  className="pl-32 pt-16 grid grid-cols-3 gap-y-6" >
    {
      profileContext.x.map((e)=><PatientCard key={e.id} data={e}/>)
    }
    
    </div>
  )
}

export default PatientsGrid
