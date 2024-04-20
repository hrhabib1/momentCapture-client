const AddServices = () => {
    return (
        <div className="pt-32">
            <form className="text-black p-10 bg-white">
                       <h1 className="text-2xl mb-5 text-center">Please add your new service here: </h1>

                        <div className='grid gap-5 grid-cols-1 lg:grid-cols-2 md:grid-cols-1'>

                        <input type="text" name="firstName" placeholder='your first name' className='input input-ghost input-bordered'/>

                        <input type="text" name="lastName" placeholder='your last name' className='input input-ghost input-bordered'/>

                        <input type="text" name="photoURL" placeholder='your photo URL' className='input input-ghost input-bordered'/>
                       
                        <input type="text" name="title" placeholder='service name'   className='input input-ghost input-bordered my-3' required/>

                        <input type="text" name="price" placeholder='your service price' className='input input-ghost input-bordered' required/>

                        <input type="text" name="imgURL" placeholder='your service image URL' className='input input-ghost input-bordered my-3'/>

                       
                        </div>
                        <textarea name='details' className="textarea input input-ghost input-bordered w-full my-5 h-56" placeholder="Add your service details" required></textarea>

                        <textarea name='delivery' className="textarea input input-ghost input-bordered w-full my-5 h-20" placeholder="Add your service delivery method" required></textarea>

                        <div className='text-center my-5'>
                        <button type="submit" className="btn btn-warning px-10">Submit</button>
                        </div>
                        
            </form> 
        </div>
    );
};

export default AddServices;