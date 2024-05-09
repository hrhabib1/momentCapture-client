const AddServices = () => {
   
    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const photographerName = form.photographerName.value;
        const price = form.price.value;
        const category = form.category.value;
        const position = form.position.value;
        const duration = form.duration.value;
        const capture = form.capture.value;
        const print = form.print.value;
        const delivery = form.delivery.value;
        const workArea = form.workArea.value;
        const transport = form.transport.value;
        const indore = form.indore.value;
        const location = form.location.value;
        const addServices = {
            title,
            photographerName,
            price,
            print,
            position,
            duration,
            capture,
            category,
            delivery,
            workArea,
            transport,
            indore,
            location

        }
        console.log(addServices);
        fetch('https://moment-capture-server-beta.vercel.app/addService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addServices)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })

        form.reset();

    }
    return (
            <div className="pt-24">
            <h1 className="text-2xl text-center mt-5  text-black font-bold underline">Please add your new service here: </h1>
            <form onSubmit={handleAddServices} className=" p-10 my-10 bg-gray-200 mx-10 font-2xl">


                <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-1 text-black'>
                    <input type="text" name="title" placeholder='Enter Your Service Title' className='input input-ghost input-bordered text-black ' required />
                    
                    <input type="text" name="photographerName" placeholder='Enter Your photographer Name' className='input input-ghost input-bordered text-black ' required />

                    <div>
                        <label>Photographer Position:</label>
                        <select id="position" name="position" className='px-5 py-2 ml-3 border bg-slate-400'>
                            <option value="Senior Photographer">1. Senior Photographer</option>
                            <option value="Junior Photographer">2. Junior Photographer</option>
                        </select>
                    </div>
                    <input type="text" name="price" placeholder='Enter Your service price' className='input input-ghost input-bordered text-black' />

                    <input type="text" name="duration" placeholder='Enter Your service time duration' className='input input-ghost input-bordered text-black' required />

                    <input type="text" name="capture" value='Picture capture unlimited' className='input input-ghost input-bordered text-black' required />

                    <div>
                        <label>Package Category:</label>
                        <select id="category" name="category" className='px-5 py-2 ml-3 border bg-slate-400'>
                            <option value="nature">1. nature</option>
                            <option value="event">2. event</option>
                            <option value="wedding">3. wedding</option>
                            <option value="fashion">4. fashion</option>
                            <option value="portrait">5. portrait</option>
                            <option value="drone">6. drone</option>
                        </select>
                    </div>                   
                    <input type="text" name="print" value='All photo processed & printed copies (50 pes 4R)' className='input input-ghost input-bordered text-black ' required />

                    <input type="text" name="delivery" value='Photo will be deliverd on pendrive or google drive' className='input input-ghost input-bordered text-black' />

                    <input type="text" name="workArea" value='We are work all Bangladesh' className='input input-ghost input-bordered text-black' />

                    <input type="text" name="transport" value='Transportation & Accommodation cost applicable' className='input input-ghost input-bordered text-black' />

                    <input type="text" name="indore" value='Indore & event outdoor (if you can)' className='input input-ghost input-bordered text-black' />

                    <input type="text" name="location" value='Our location: Noakhali Sadar, Bangladesh' className='input input-ghost input-bordered text-black' />

                </div>
                <div className='text-center my-5'>
                    <button type="submit" className="btn btn-warning px-10">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default AddServices;

