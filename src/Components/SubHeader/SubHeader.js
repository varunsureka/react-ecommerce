import React from 'react';
import Carousel  from './Carousel/Carousel';
import './SubHeader.css';
function SubHeader() {
  return (
    <>
    <section className='py-11 bg-light-gradient border-bottom border-white border-5'>
        <div className='bg-holder overlay overlay-light modern-bg-image'>

        </div>

        <div className='container'>
            <div className='row flex-center'>
               <div className='col-12 mb-10'>
                   <div className='d-flex align-items-center flex-column'>
                       <h1 className='fw-normal'>With an outstanding style, only for you</h1>
                       <h1 className='fs-4 fs-lg-8 fs-md-6 fw-bold'>Exclusively designed for you</h1>
                   </div>
               </div>
            </div>

        </div>

    </section>
    <section className='py-0 modern-sub-header'></section>
       <div className='container'>
            <div className="row g-0">
                <div className='col-md-6'>
                   <div className='card card-span h-100 text-white'>
                      <img className='img-fluid' src="../../assets/img/her.png"  alt="" width="790"/>
                      <div className='card-img-overlay d-flex flex-center'>
                         <a href="" className="btn btn-lg btn-light">For Her</a>
                      </div>
                   </div>
                </div>

                <div className="col-md-6">
               <div className="card card-span h-100 text-white">
                  <img src="../../assets/img/him.png" className="img-fluid" width="790" alt="" />
                  <div className="card-img-overlay d-flex flex-center">
                       <a href="" className="btn btn-lg btn-light">For Him</a>
                  </div>
               </div>
          </div>

            </div>
       </div>
       <Carousel />
    </>
  )
}

export default SubHeader
