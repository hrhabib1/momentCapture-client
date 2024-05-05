import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import BookingRow from "./BookingRow";

const AllBooking = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);
    
    const handleBookingConfirm = id => {
        const proceed = confirm('Are you sure you want to confirm it?');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirmed' })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        const remaining = bookings.filter(booking => booking._id !== id);
                        const update = bookings.find(booking => booking._id === id);
                        update.status = 'confirmed'
                        const newBookings = [update, ...remaining]
                        setBookings(newBookings);
                    }
                })
        }
    }
    
    return (
        <div>
            <div className="pt-28">
                <div className="overflow-x-auto border-red-400 bg-white text-black text-xl">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Service Name</th>
                                <th>Customer Name & Email</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Photographer Name &<br />Position</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.length > 0 && bookings.map(booking => (
                                <BookingRow
                                    key={booking._id}
                                    booking={booking}
                                    handleBookingConfirm={handleBookingConfirm}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllBooking;
