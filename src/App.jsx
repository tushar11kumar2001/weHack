

import { useEffect } from 'react';
import DynamicRoutes from './component/DynamicRoutes'

import { useFirebaseContext } from './utils/firebaseContext'
import { useProfileContext } from './utils/profileContext';

const App = () => {
  const firebaseContext = useFirebaseContext();

  useEffect(()=>{
    firebaseContext.authChanged();
    firebaseContext.getPatients();
  },[])
  return (
 <>
 <DynamicRoutes/>
 </>
  )
}

export default App
