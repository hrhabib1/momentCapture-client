import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Main/Main";
import Services from "../../Pages/Services/Services";
import AddServices from "../../Pages/Services/AddServices/AddServices";
import SignIn from "../../Pages/SignIn/SignIn/SignIn";
import SignUp from "../../Pages/SignIn/SignUp/SignUp";
import Nature from "../../Pages/Category/Nature/Nature";
import Event from "../../Pages/Category/Event/Event";
import Drone from "../../Pages/Category/Drone/Drone";
import Fashion from "../../Pages/Category/Fashion/Fashion";
import Wedding from "../../Pages/Category/Wedding/Wedding";
import Portrait from "../../Pages/Category/Portrait/Portrait";
import WeddingService from "../../Pages/Services/WeddingService";
import NatureService from "../../Pages/Services/NatureService";
import EventService from "../../Pages/Services/EventService";
import DroneService from "../../Pages/Services/DroneService";
import FashionService from "../../Pages/Services/FashionService";
import PortraitService from "../../Pages/Services/PortraitService";
import Booking from "../../Pages/Booking/Booking";
import MyBooking from "../../Pages/Booking/MyBooking";
import AllBooking from "../../Pages/Booking/AllBooking";
import PrivateRoutes from "./PrivateRoutes";
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
         { path: '/nature',
          element: <Nature></Nature>
        },
         { path: '/event',
          element: <Event></Event>
        },
         { path: '/drone',
          element: <Drone></Drone>
        },
         { path: '/fashion',
          element: <Fashion></Fashion>
        },
         { path: '/wedding',
          element: <Wedding></Wedding>
        },
         { path: '/portrait',
          element: <Portrait></Portrait>
        },
         { path: '/natureService',
          element: <NatureService></NatureService>
        },
         { path: '/eventService',
          element: <EventService></EventService>
        },
         { path: '/droneService',
          element: <DroneService></DroneService>
        },
         { path: '/fashionService',
          element: <FashionService></FashionService>
        },
         { path: '/weddingService',
          element: <WeddingService></WeddingService>
        },
         { path: '/portraitService',
          element: <PortraitService></PortraitService>
        },
         { path: '/myBooking',
          element: <PrivateRoutes><MyBooking></MyBooking></PrivateRoutes>
        },
         { path: '/allBooking',
          element: <PrivateRoutes><AllBooking></AllBooking></PrivateRoutes>
        },
         { path: '/booking/:id',
          element: <PrivateRoutes><Booking></Booking></PrivateRoutes>,
        loader: ({params}) => fetch(`https://moment-capture-server-beta.vercel.app/addService/${params.id}`)
        },
      
      ],}
  ]);