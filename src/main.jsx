import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './assets/Routes/Routes';
import AuthProviders from './Pages/providers/AuthProviders';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='max-w-screen-xl mx-auto bg-purple-400'>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
    </div>
  </React.StrictMode>,
)
