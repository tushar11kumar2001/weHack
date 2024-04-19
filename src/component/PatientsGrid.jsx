import React from 'react'
import PatientCard from './PatientCard'
import { useProfileContext } from '../utils/profileContext'
const PatientsGrid = () => {
    const profileContext = useProfileContext();
    let newobj2;
    for(let key in profileContext.patientList){
        if(key === profileContext.user.displayName) newobj2 = profileContext.patientList[key];
    }
    // console.log("newobj2",newobj2);
    let dataArr = [];
    for(let key in newobj2){
      dataArr.push(newobj2[key])
    }
    // console.log(dataArr);
  return (
    <div  className="pl-32 pt-16 grid grid-cols-3 gap-y-6" >
    {
      dataArr.map((e)=><PatientCard key={e.id} data={e}/>)
    }
    
    </div>
  )
}

export default PatientsGrid
