import Header from './Header'
import Banner from './Banner';
import Featured from './Featured';
import Footer from './Footer'

export default function Menu() {
  return (
    <>
      <Header />

      <div className="container my-5">
        <div className="row">
          <div className="col-xl-10 col-lg-12 m-auto">
            <section className="row align-items-end">
              <div className="col-lg-4 mb-lg-0 mb-md-5 mb-sm-5">
                <h4 className="mb-10 text-green-500 font-bold text-3xl font-serif">How can help you ?</h4>
                <h1 className="mb-10 text-gray-800 font-bold text-5xl font-sans">Let us know how we can help you</h1>
                <p className="mb-3 text-gray-800 font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
                <p className="mb-3 text-gray-800 font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                  tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <h5 className="fw-bold mb-3 fs-5 hover:text-green-500">01. Visit Feedback</h5>
                    <p className='fw-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <h5 className="fw-bold mb-3 fs-5 hover:text-green-500">02. Employer Services</h5>
                    <p className='fw-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                  <div className="col-lg-6 mb-lg-0 mb-4">
                    <h5 className="fw-bold mb-3 fs-5 hover:text-green-500">03. Billing Inquiries</h5>
                    <p className='fw-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <h5 className="fw-bold mb-3 fs-5 hover:text-green-500">04.General Inquiries</h5>
                    <p className='fw-medium'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Banner />

      <Featured />

      <Footer />
    </>
  )
}
