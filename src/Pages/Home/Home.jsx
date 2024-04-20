import Banner from "./Banner/Banner";
import img1 from '../../images/category/nature/nature1.jpg'
import img2 from '../../images/category/event/event1.jpg'
import img3 from '../../images/category/fashion/fashion1.jpg'
import img4 from '../../images/category/wedding/wedding1.jpg'
import img5 from '../../images/category/portrait/portrait1.jpg'
import img6 from '../../images/category/drone/drone1.jpeg'
import img7 from '../../images/benner/img3.jpg'

const Home = () => {
    return (
        <div className="pt-32">
            <Banner></Banner>
            <div>
                <div className='text-center my-10'>
                    <p className="text-3xl text-blue-800 font-bold">Category:</p>
                    <div className="grid grid-cols-3 gap-10 mb-10 post mt-10 mx-5">
                        <div className="card w-96 h-56 bg-base-300 shadow-2xl image-full">
                            <figure><img src={img1} alt="Shoes" /></figure>
                            <div className="card-body pt-24 pl-24">
                                <a className="card-title" href="/nature">Nature Photography</a>
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-base-300 shadow-2xl image-full">
                            <figure><img src={img2} alt="Shoes" /></figure>
                            <div className="card-body pt-24 pl-24">
                                <a className="card-title" href="/event">Event Photography</a>
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-base-300 shadow-2xl image-full">
                            <figure><img src={img3} alt="Shoes" /></figure>
                            <div className="card-body pt-24 pl-24">
                                <a className="card-title" href="/fashion">Fashion Photography</a>
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-base-300 shadow-2xl image-full">
                            <figure><img src={img4} alt="Shoes" /></figure>
                            <div className="card-body pt-24 pl-24">
                                <a className="card-title" href="/wedding">Wedding Photography</a>
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-base-300 shadow-2xl image-full">
                            <figure><img src={img5} alt="Shoes" /></figure>
                            <div className="card-body pt-24 pl-24">
                                <a className="card-title" href="/portrait">Portrait Photography</a>
                            </div>
                        </div>
                        <div className="card w-96 h-56 bg-base-300 shadow-2xl image-full">
                            <figure><img src={img6} alt="Shoes" /></figure>
                            <div className="card-body pt-24 pl-24">
                                <a className="card-title" href="/drone">Drone Photography</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-5'>
                    <h1>service</h1>
                </div>
                <div className='text-center my-5'>
                    <a href='/services'><button className="btn btn-black">See all servises</button></a>
                </div>
            </div>
            <div className="flex flex-col">
                <div>
                    <h1 className="text-3xl text-black text-center my-5 underline underline-offset-2">Meet Photographar:</h1>
                    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-5">
                        <div className="avatar">
                            <div className="w-56 mx-auto mt-5 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img7} />
                            </div>
                        </div>
                        <div className="card-body ms-16">
                            <h2 className="card-title">Md. Ismail Tawhid</h2>
                            <p><strong>Senior Photographer</strong></p>
                        </div>
                    </div>
                </div>
                {/* about */}
                <div className="px-24 bg-white text-2xl">
                    <h1 className="text-3xl text-black text-center my-5 underline underline-offset-2">Why choose:</h1>
                    <div className="card w-full bg-neutral text-neutral-content mx-auto my-5">
                        <div className="card-body items-center">
                            <ul>
                                <li>* Exceptional images deserve an exceptional presentation.</li>
                                <li>* Photo Click Meets Perfection.</li>
                                <li>* Passionate about capturing all of life’s important occasions.</li>
                                <li>* Photography moments captured…naturally.</li>
                                <li>* Me and my camera: a Journey around the world</li>
                                <li>* Path of passion.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;