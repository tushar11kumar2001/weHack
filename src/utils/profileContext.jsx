import { createContext, useContext, useState } from "react";

const profileContext = createContext();
export const useProfileContext = ()=>useContext(profileContext);


const ProfileContextProvider = (props)=>{
    const [user,setUser] = useState({});
    const [patientList,setPatientList] = useState(null);
    const userData = (data)=>{
        setUser(data)
    }
    const setPatient = (data)=>{
        setPatientList(data)
    }
    return (
    <profileContext.Provider value={
        {  user,
           userData,
           patientList,
           setPatient
        }
    }>
    {props.children}
    </profileContext.Provider>)
}

export default ProfileContextProvider;