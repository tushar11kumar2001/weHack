import React from 'react'
import PatientCard from './PatientCard'
import { useProfileContext } from '../utils/profileContext'
const PatientsGrid = () => {
    const profileContext = useProfileContext();
    let newobj2;
    for(let key in profileContext.patientList){
        if(key === profileContext.user.displayName) newobj2 = profileContext.patientList[key];
    }
    let dataArr = [];
    for(let key in newobj2){
      dataArr.push(newobj2[key])
    }
    // console.log(dataArr);
    if(dataArr.length === 0) return <div className='pl-40 pt-16 text-xl font-semibold'>You have not any assigned patient, Please add new patient...</div>
  return (
    <div  className="pl-32 pt-16 grid grid-cols-3 gap-y-6" >
    {
      dataArr.map((e)=><PatientCard key={e.id} data={e}/>)
    }
    
    </div>
  )
}

export default PatientsGrid
