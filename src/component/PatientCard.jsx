import React from 'react';
import { useNavigate } from 'react-router-dom';

const PatientsCard = ({data}) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="flex">
        <div className="">
          <img className="h-48 w-full object-cover " src={import.meta.env.VITE_PATIENTLOGO} alt="patient"/>
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.name}</div>
          <p className="my-2 text-gray-600">{data.dieases}</p>
          <button 
          onClick={()=>{navigate("patient/"+data.id , {
            state:data
          })}}
          className=" bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Details</button>
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
