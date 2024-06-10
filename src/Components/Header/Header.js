import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <main className="main" id="top">
    <nav  className="navbar navbar-expand-lg navbar-light fixed-top py-3 d-block backdrop shadow-transition" data-navbar-on-scroll="data-navbar-on-scroll">
         <div className="container">
            <a href="" className="navbar-brand d-inline-flex">
             <img className="d-inline-block" src="../../assets/img/logo.png" alt="" />
             <span className="text-1000 fs-0 fw-bold ms-2">Modern Shop</span>
             </a>
              <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" style={{justifyContent:'end'}}>
                 <div className="d-flex">
                    <a href="" className="text-1000">
                        <svg className="feather feather-shopping-cart me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="9" cy="21" r="1"></circle>
                            <circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                          </svg>
                    </a>

                    <a href="" className="text-1000">
                        <svg className="feather feather-search me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                    </a>

                    <a href="" className="text-1000">
                        <svg className="feather feather-user me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                    </a>

                    <a href="" className="text-1000">
                        <svg className="feather feather-heart me-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                          </svg>
                    </a>
                 </div>
            </div>
         </div>
    </nav>
    
</main>
  )
}

export default Header
