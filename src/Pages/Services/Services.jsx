import img2 from '../../images/Packages/package1.jpeg'
import img3 from '../../images/Packages/package2.jpeg'
import img4 from '../../images/Packages/package3.jpeg'
import img5 from '../../images/Packages/package4.jpeg'
import img6 from '../../images/Packages/package5.jpeg'
import img7 from '../../images/Packages/package6.jpeg'
import img8 from '../../images/Packages/package7.jpeg'
const Services = () => {
    return (
        <div className='pt-32'>
            <div className="grid grid-cols-2 gap-10 mb-10 post text-black mt-10 mx-5">
                <div className="card card-compact  bg-white shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-white shadow-xl">
                    <figure><img src={img3} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-white shadow-xl">
                    <figure><img src={img4} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-white shadow-xl">
                    <figure><img src={img5} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-white shadow-xl">
                    <figure><img src={img6} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-white shadow-xl">
                    <figure><img src={img7} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  bg-white shadow-xl">
                    <figure><img src={img8} alt="Shoes" /></figure>
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See Details...</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;