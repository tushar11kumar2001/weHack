import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import FirebaseContextProvider from './utils/firebaseContext.jsx'
import ProfileContextProvider from './utils/profileContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
    <ProfileContextProvider>
    <FirebaseContextProvider>
    
    <App />
    
    </FirebaseContextProvider>
    </ProfileContextProvider>
    </BrowserRouter>
  
  </React.StrictMode>,
)
