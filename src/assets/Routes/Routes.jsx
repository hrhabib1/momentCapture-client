import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import Services from "../../Pages/Services/Services";
import AddServices from "../../Pages/Services/AddServices/AddServices";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignIn/SignUp/SignUp";
 export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
         { path: '/',
          element: <Home></Home>
        },
         { path: '/services',
          element: <Services></Services>
        },
         { path: '/addServices',
          element: <AddServices></AddServices>
        },
         { path: '/signIn',
          element: <SignIn></SignIn>
        },
         { path: '/signUp',
          element: <SignUp></SignUp>
        },
      
      ],}
  ]);