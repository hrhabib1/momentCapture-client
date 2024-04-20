import img1 from '../../../images/category/wedding/wedding1.jpg'
import img2 from '../../../images/category/wedding/wedding2.jpg'
import img3 from '../../../images/category/wedding/wedding3.jpg'
import img4 from '../../../images/category/wedding/wedding4.jpg'
import img5 from '../../../images/category/wedding/wedding5.jpg'
import img6 from '../../../images/category/wedding/wedding6.jpg'
const Wedding = () => {
    return (
        <div className="pt-32 bg-white pb-10">
            <div className="grid grid-cols-2 gap-10 m-10">
                <div className="card w-full shadow-2xl bg-fuchsia-200">
                    <figure className="pt-10 px-10">
                        <img src={img1} alt="" className="rounded-xl h-96 w-full" />
                    </figure>
                    <div className="card-body items-center text-center text-black font-xl">
                        <h2 className="card-title">Wedding Photography</h2>
                        <p>This image click by <strong>Md. Ismail Tawhid</strong> <br />Senior Photographer</p>
                        <div className="card-actions">
                            <button className="btn px-28 btn-primary">Go for Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-fuchsia-200">
                    <figure className="pt-10 px-10">
                        <img src={img2} alt="" className="rounded-xl h-96 w-full" />
                    </figure>
                    <div className="card-body items-center text-center text-black font-xl">
                        <h2 className="card-title">Wedding Photography</h2>
                        <p>This image click by <strong>Md. Ismail Tawhid</strong> <br />Senior Photographer</p>
                        <div className="card-actions">
                            <button className="btn px-28 btn-primary">Go for Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-fuchsia-200">
                    <figure className="pt-10 px-10">
                        <img src={img3} alt="" className="rounded-xl h-96 w-full" />
                    </figure>
                    <div className="card-body items-center text-center text-black font-xl">
                        <h2 className="card-title">Wedding Photography</h2>
                        <p>This image click by <strong>Md. Ismail Tawhid</strong> <br />Senior Photographer</p>
                        <div className="card-actions">
                            <button className="btn px-28 btn-primary">Go for Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-fuchsia-200">
                    <figure className="pt-10 px-10">
                        <img src={img4} alt="" className="rounded-xl h-96 w-full" />
                    </figure>
                    <div className="card-body items-center text-center text-black font-xl">
                        <h2 className="card-title">Wedding Photography</h2>
                        <p>This image click by <strong>Adnan Rony</strong> <br />Senior Photographer</p>
                        <div className="card-actions">
                            <button className="btn px-28 btn-primary">Go for Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-fuchsia-200">
                    <figure className="pt-10 px-10">
                        <img src={img5} alt="" className="rounded-xl h-96 w-full" />
                    </figure>
                    <div className="card-body items-center text-center text-black font-xl">
                        <h2 className="card-title">Wedding Photography</h2>
                        <p>This image click by <strong>Adnan Rony</strong> <br />Senior Photographer</p>
                        <div className="card-actions">
                            <button className="btn px-28 btn-primary">Go for Booking</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full shadow-2xl bg-fuchsia-200">
                    <figure className="pt-10 px-10">
                        <img src={img6} alt="" className="rounded-xl h-96 w-full" />
                    </figure>
                    <div className="card-body items-center text-center text-black font-xl">
                        <h2 className="card-title">Wedding Photography</h2>
                        <p>This image click by <strong>Adnan Rony</strong> <br />Senior Photographer</p>
                        <div className="card-actions">
                            <button className="btn px-28 btn-primary">Go for Booking</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Wedding;