import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <section className="py-0 pt-7 footer-bg">

    <div className="container">
      <div className="row">
        <div className="col-6 col-lg-2 mb-3">
          <h5 className="lh-lg fw-bold">Company Info</h5>
          <ul className="list-unstyled mb-md-4 mb-lg-0">
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">About Us</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Affiliate</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Fashion Blogger</a></li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3">
          <h5 className="lh-lg fw-bold">Help &amp; Support</h5>
          <ul className="list-unstyled mb-md-4 mb-lg-0">
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Shipping Info</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Refunds</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">How to Order</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">How to Track</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Size Guides</a></li>
          </ul>
        </div>
        <div className="col-6 col-lg-2 mb-3">
          <h5 className="lh-lg fw-bold">Customer Care</h5>
          <ul className="list-unstyled mb-md-4 mb-lg-0">
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Contact Us</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Payment Methods</a></li>
            <li className="lh-lg"><a className="text-800 text-decoration-none" href="#!">Bonus Point</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-auto ms-auto">
          <h5 className="lh-lg fw-bold">Signup For The Latest News</h5>
          <div className="row input-group-icon mb-5">
            <div className="col-12">
              <input className="form-control input-box" type="email" placeholder="Enter Email" aria-label="email" />
              <svg className="bi bi-arrow-right-short input-box-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="#424242" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"> </path>
              </svg>
            </div>
          </div>
          <p className="text-800">
            <svg className="feather feather-phone me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg><span className="text-800">+3930219390</span>
          </p>
          <p className="text-800">
            <svg className="feather feather-mail me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg><span className="text-800">something@gmail.com</span>
          </p>
        </div>
      </div>
      <div className="border-bottom border-3"></div>
      <div className="row flex-center my-3">
       
   
      </div>
    </div>
    

  </section>

  )
}

export default Footer
