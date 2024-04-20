import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import img1 from '../../images/Packages/moment.jpeg'
const ServicesCart = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { title, photographerName, price, print, position, duration, capture, category, delivery, workArea, transport, indore, location, _id } = item;
    return (
        <div className="hero min-h-screen rounded-3xl" style={{ backgroundImage: `url(${img1})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md">
                    <h1 className="-mt-36 mb-5 text-3xl font-bold text-center text-yellow-700">{title}</h1>
                    <p className="text-center">Photographer Name: <strong>{photographerName}</strong></p>
                    <p className="text-center">Position: {position}</p>
                    <p className="mt-5">Duration: {duration} (Extra per hour 1,500 bdt</p>
                    <h1 className="font-bold mb-5">Price: <strong>{price}</strong></h1>
                    <p>- {capture}</p>
                    <p>- {print}</p>
                    <p>- {delivery}</p>
                    <p>- {workArea}</p>
                    <p>- {transport}</p>
                    <p>- {indore}</p>
                    <p className="mb-5">- {location}</p>
                    
                    {
                               user?.email === 'shakilahmed7924@gmail.com'? 
                               <button></button> :
                               <Link to={`/booking/${_id}`}>
                               <button className="btn bg-slate-500 bg-opacity-60 w-96">Booking Now</button>
                               </Link>
                            }
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;