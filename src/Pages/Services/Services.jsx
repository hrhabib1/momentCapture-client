import { useState } from 'react';
import { useEffect } from 'react';
import ServicesCart from './ServicesCart';
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='pt-32'>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful">
                
                {
                 services.map(item => <ServicesCart
                 key={item._id}
                 item={item}
                 ></ServicesCart>)
                } 
                 
             </div>  
            
        </div>
    );
};

export default Services;