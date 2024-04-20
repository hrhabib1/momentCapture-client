import { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";

const EventService = () => {
    const [eventServices, setEventServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addService')
            .then(res => res.json())
            .then(data =>{
                const eventServise = data.filter(item => item.
                    category === 'event');
                    setEventServices(eventServise)
            })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                
                {
                 eventServices.map(item => <ServicesCart
                 key={item._id}
                 item={item}
                 ></ServicesCart>)
                } 
                 
             </div>  
            
        </div>
    );
};


export default EventService;