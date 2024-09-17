import React from 'react'

export default function Banner() {
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-lg-12">
            <div className="position-relative newsletter-inner h-96">
              <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-10.png" alt="" className='position-absolute top-0 h-96 img-fluid' />
              <div className="newsletter-content position-absolute top-0">
                <h2 className="mb-20 font-bold text-3xl mt-5 mx-5">
                  Stay home &amp; get your daily <br />
                  needs from our shop
                </h2>
                <p className="mb-45 font-semibold text-xl mx-5">
                  Start You'r Daily Shopping with{" "}
                  <span className="text-brand font-bold">Nest Mart</span>
                </p>
                <form className="form-subcriber d-flex border rounded mx-5 mt-3">
                  <input type="email" placeholder="Your emaill address" className='w-96 ms-2 ps-5 font-semibold'/>
                  <button className="btn btn-lg btn-success" type="submit">
                    Subscribe
                  </button>
                </form>
              </div>
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/banner/banner-9.png" alt="newsletter" className='absolute bottom-0 right-0 h-64' />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
