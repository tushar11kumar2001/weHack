
import PatientDetails from "../component/PatientDetails";
import Patients from "../component/Patients";
import PatientsGrid from "../component/PatientsGrid";
import Profile from "../component/Profile";
import Home from "../pages/Home";
import Login from "../pages/Login"

export const routes = ()=>{
    const route = [
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/",
            element:<Home/>,
            children:[
                {
                    path:"/",
                    element:<Patients/>,
                    children:[
                        {
                            path:"/",
                            element:<PatientsGrid/>
                        },
                        {
                            path:"patient/:id",
                            element:<PatientDetails/>
                        }
                        
                    ]
                },
                {
                    path:"home/profile",
                    element:<Profile/>
                }
            ]
        }
    ]

    return route;
}