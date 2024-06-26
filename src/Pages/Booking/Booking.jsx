import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
const Booking = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const { title, photographerName, position, price, _id } = service;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const customerName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const customerLocation = form.customerLocation.value;
        const date = form.date.value;
        const addBookingPost = {
            title,
            customerName,
            email,
            date,
            customerLocation,
            position,
            phone,
            photographerName,
            service_id: _id,
            price

        }
        console.log(addBookingPost);
        fetch('https://moment-capture-server-beta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addBookingPost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        form.reset();

    }
    return (
        <div>
            <h1 className="pt-28 text-3xl text-center font-extrabold text-warning py-5">Booking Service:</h1>
            <div className="px-40">
               <div className="px-16">
               <div className="card w-full bg-blue-200 text-primary-content mb-3 p">
                    <div className="card-body flex flex-row justify-center gap-5">
                           <div className="border-e-2 border-black pe-5">
                            <h1 className="text-center font-bold pt-3">Service Name:</h1>
                           <h1 className="text-2xl font-bold mb-5 text-orange-600">{title}</h1>
                           </div>
                           <div>
                           <h1 className="text-xl font-bold">Photographer Name:    {photographerName}</h1>
                            <h1 className="text-xl font-bold">Position: {position}</h1>
                            <p>Price: {price}</p>
                           </div>
                        </div>
                </div>
               </div>
                <form onSubmit={handleBooking} className="py-16 px-32 w-full bg-purple-200 text-black  mx-auto mb-10 rounded text-xl">
                    <h1 className="text-2xl pb-5 font-extrabold text-center text-red-400">Booking Here</h1>
                    <div>
                        <p>Enter Your Name:</p>
                        <input className="bg-white text-black px-10 py-4 w-full" type="text" name="name" id="" defaultValue={user?.displayName} required />
                    </div>
                    <div>
                        <p className="mt-5">Enter Your Phone Number:</p>
                        <input className="bg-white text-black px-10 py-4 w-full" type="text" name="phone" id="" placeholder="Phone Number" required />
                    </div>
                    <div>
                        <p className="mt-5">Enter Your Email Address:</p>
                        <input className="bg-white text-black px-10 py-4 w-full" type="email" name="email" id="" defaultValue={user?.email} required />
                    </div>
                    <div>
                        <p className="text-black mt-5">Enter Your Location Name:</p>
                        <input className="bg-white text-black px-10 py-4 w-full" type="text" name="customerLocation" id="" placeholder="Location" required />
                    </div>
                    <div>
                        <p className="text-black mt-5"> Service Name:</p>
                        <input className="bg-white text-black px-10 py-4 w-full" type="text" name="title" value={title} id="" required />
                    </div>
                    <div>
                        <p className="text-black mt-5">Enter your booking date:</p>
                        <input type="date" name="date" placeholder='date' className='input input-ghost input-bordered text-white w-full' />
                    </div>
                    <button className="bg-warning rounded py-5 px-10 my-5 btn-block" type="submit">Confirm Booking</button>
                </form>
            </div>
        </div>
    );
};


export default Booking;