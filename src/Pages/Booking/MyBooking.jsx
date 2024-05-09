import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProviders";
import BookingRow from "./BookingRow";
const MyBooking = () => {
    
        const { user } = useContext(AuthContext);
        const [bookings, setBookings] = useState([]);
        const url = `https://moment-capture-server-beta.vercel.app/bookings?email=${user.email}`;
        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(data => setBookings(data))
        }, [url]);
        const handleDelete= id =>{
            const proceed = confirm('Are you sure you want to delete it?');
            if(proceed){
              fetch(`https://moment-capture-server-beta.vercel.app/bookings/${id}`, {
                  method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                  console.log(data);
                  if(data.deleteCount > 0){
                      const remaining = bookings.filter(booking=> booking._id !== id);
                      setBookings(remaining);
                      alert('deleted successful');
                  }
              })
            }
      }
        return (
            <div>
                <div className="pt-28">
                    <div className="overflow-x-auto bBooking-red-400 bg-white text-black text-xl">
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
                              {
                                bookings.map(booking => <BookingRow
                                  key={booking._id}
                                  booking={booking}
                                  handleDelete={handleDelete}
                                ></BookingRow>)
                              }
                               
                            </tbody>
    
                        </table>
                    </div>
                </div>
            </div>
        );
    };
export default MyBooking;