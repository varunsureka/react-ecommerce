import React,{useEffect,useState} from 'react';
import axios  from 'axios';

function Carousel() {
    const url = 'https://fakestoreapi.com/products';
    const [images,setImages]= useState([]);
     let item =  null;
     
  
    useEffect(
        () =>{
           ( async () => {
             const products = await axios.get(url);
              setImages(products.data.slice(0,4));
              //console.log(products.data);
           }) ();
           return () =>{
            console.log('Component unMounted successfully');
           }
          
        },[])
    
     if(images.length > 0){
        item = images.map(i => {
            return(
               <div key={i.id} className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                   <div className='card card-span h-100 text-white'>
                      <img width={200} height={200} src={i.image} className='img-fluid' alt='' />
                      <div className="card-img-overlay ps-0"></div>
                      <div className="card-body ps-0 bg-200">
                                            <h5 className="fw-bold text-1000 text-truncate">{i.title}</h5>
                                            <div className="fw-bold">
                                                <span className="text-primary">{i.price}</span>
                                            </div>
                                        </div>
                   </div>
               </div>
            );
        })
     }
  return (
     <section className="py-0">
         <div className='container'>
            <div className="row h-100">
                <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
                <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Best Deals</h5>
                </div>
                <div className="col-12">
                    <div className="carousel slide" id="carouselBestDeals" data-bs-touch="false" data-bs-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                               <div className="row h-100 align-items-center g-2">
                                   {item}
                               </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="5000">
                               <div className="row h-100 align-items-center g-2">
                                   {item}
                               </div>
                            </div>
                            <div className="row">
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselBestDeals" data-bs-slide="prev">
                               <span className="carousel-control-prev-icon"></span>
                               <span className="visually-hidden">Previous</span>
                            </button>

                            <button className="carousel-control-next" type="button" data-bs-target="#carouselBestDeals" data-bs-slide="next">
                                <span className="carousel-control-next-icon"></span>
                                <span className="visually-hidden">Next</span>
                             </button>
                            
                        </div>
                        </div>

                    </div>
                    </div>
            </div>
         </div>
     </section>
  )
}

export default Carousel
