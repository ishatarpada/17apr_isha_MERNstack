import React from 'react';

export default function Featured() {
  return (
    <>
      <div className="container my-5">
        <div className="row gap-3 justify-center items-center">
          <div className="col-md-3 bg-slate-100 rounded mb-md-4 mb-xl-0">
            <div
              className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated p-3"
              data-wow-delay={0}
              style={{ visibility: 'visible', animationName: 'fadeInUp' }}
            >
              <div className="banner-icon">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="" className='me-3' />
              </div>
              <div className="banner-text">
                <h3 className="icon-box-title font-bold">Best prices &amp; offers</h3>
                <p>Orders $50 or more</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-slate-100 rounded">
            <div
              className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated p-3"
              data-wow-delay=".1s"
            >
              <div className="banner-icon">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" alt="" className='me-3' />
              </div>
              <div className="banner-text">
                <h3 className="icon-box-title font-bold">Free delivery</h3>
                <p>24/7 amazing services</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-slate-100 rounded">
            <div
              className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated p-3"
              data-wow-delay=".2s"
            >
              <div className="banner-icon">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" alt="" className='me-3' />
              </div>
              <div className="banner-text">
                <h3 className="icon-box-title font-bold">Great daily deal</h3>
                <p>When you sign up</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-slate-100 rounded">
            <div
              className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated p-3"
              data-wow-delay=".3s"
            >
              <div className="banner-icon">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" alt="" className='me-3' />
              </div>
              <div className="banner-text">
                <h3 className="icon-box-title font-bold">Wide assortment</h3>
                <p>Mega Discounts</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-slate-100 rounded">
            <div
              className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp animated p-3"
              data-wow-delay=".4s"
            >
              <div className="banner-icon">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" alt="" className='me-3' />
              </div>
              <div className="banner-text">
                <h3 className="icon-box-title font-bold">Easy returns</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 bg-slate-100 rounded d-xl-none">
            <div
              className="banner-left-icon d-flex align-items-center wow animate__ animate__fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="banner-icon">
                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" alt="" className='me-3' />
              </div>
              <div className="banner-text">
                <h3 className="icon-box-title font-bold">Safe delivery</h3>
                <p>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
