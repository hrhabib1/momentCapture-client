import { useEffect, useState } from "react";
import ServicesCart from "./ServicesCart";

const NatureService = () => {
    const [natureServices, setNatureServices] = useState([]);

    useEffect(() => {
        fetch('https://moment-capture-server-beta.vercel.app/addService')
            .then(res => res.json())
            .then(data =>{
                const natureServise = data.filter(item => item.
                    category === 'nature');
                    setNatureServices(natureServise)
            })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black px-24 w-ful pt-32">
                
                {
                 natureServices.map(item => <ServicesCart
                 key={item._id}
                 item={item}
                 ></ServicesCart>)
                } 
                 
             </div>  
            
        </div>
    );
};


export default NatureService;