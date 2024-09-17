import slide1 from '../../assets/Image/slider-1.png';
import slide2 from '../../assets/Image/slider-2.png';

export default function Slider() {

  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active bg-green-500"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mt-5">
              <h5 className='fw-bold text-gray-700 display-3 mb-3 text-start'>Don't Miss Amazing grocery deals</h5>
              <p className='fw-semibold text-gray-400 text-3xl mb-3 text-start'>Sign-up for the daily Master</p>
                <form className="max-w-md mx-auto rounded-full mt-3 ms-0">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none me-2">
                      <i className="bi bi-send-arrow-up-fill text-green-700 fs-5"></i>
                    </div>
                    <input className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2. py-3" name="email_address" aria-label="Email Address" placeholder="your email address..." required="" type="email" />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">Subscribe</button>
                  </div>
                </form>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block mt-5">
              <h5 className='fw-bold text-gray-700 display-3 mb-3 text-start'>Fresh Vegetable Big Discount</h5>
              <p className='fw-semibold text-gray-400 text-3xl mb-3 text-start'>Save up to 50% off  on your First Order</p>
                <form className="max-w-md mx-auto rounded-full mt-3 ms-0">
                  <label className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none me-2">
                      <i className="bi bi-send-arrow-up-fill text-green-700 fs-5"></i>
                    </div>
                    <input className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2. py-3" name="email_address" aria-label="Email Address" placeholder="your email address..." required="" type="email" />
                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">Subscribe</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon  bg-green-900 rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon  bg-green-900 rounded-circle" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>

    </>
  );
}