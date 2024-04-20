import logo1 from '../../../images/benner/img1.jpg'
import logo2 from '../../../images/benner/img2.jpg'
import logo3 from '../../../images/benner/img3.jpg'

const Banner = () => {
    return (
       <div className='px-32 py-10 bg-slate-300'>
         <div className="carousel py-5 h-96 rounded-[35px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={logo1} alt='' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3">
      <h1 className='text-5xl text-white'>This photo <br />
      clicked by <br />
      Ismail Photoraphy
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={logo2} alt='' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3">
      <h1 className='text-5xl'>This photo <br />
      clicked by <br />
      Ismail Photoraphy
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={logo3} alt='' className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/3">
      <h1 className='text-5xl'>This photo <br />
      clicked by <br />
      Ismail Photoraphy
      </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
       </div>
    );
};

export default Banner;