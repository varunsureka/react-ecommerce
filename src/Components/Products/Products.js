import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Products.css';

function Products() {
    const url = 'http://localhost:8000/products';
    const[myProducts,setProducts] = useState([]);
    const [error,setError] = useState(false);
    let allProducts = null;
     /*  useEffect(
        () => {
           (async () => {
             const products = await axios.get(url);
             setProducts(products.data);
           })();
           return () => {
             setProducts(null);
           }
        },[]) */
        useEffect(
          () =>{
           axios.get(url)
           .then(
            (response) => {
                setProducts(response.data);
            }).catch(
            (err) => {
              setError(true);
            })
          
          },[])

        if(myProducts.length > 0){
           //console.log('Hii');
            allProducts = myProducts.map(
                (item) => {
                  return(
                    <div key={item.id} className="pcard col-md-3">
                    <img src={item.image} alt="" />
                    <h5 style={{whiteSpace:'nowrap', overflow:'hidden',textOverflow:'ellipsis',maxWidth:'100ch'}}>{item.title}</h5>
                    <p style={{whiteSpace:'nowrap', overflow:'hidden',textOverflow:'ellipsis',maxWidth:'100ch'}}>{item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <button  className="btn btn-primary">+</button>
                    <button className="btn btn-primary btn-remove-cart" id="119">-</button>
                </div>
                  )
                }
            )
        }
        else{
           if(error){
            allProducts = (
              <div className="pcard col-md-3">
  
                      <h5 style={{whiteSpace:'nowrap', overflow:'hidden',textOverflow:'ellipsis',maxWidth:'100ch'}}>No Product to display!</h5>
                      <img src='../../assets/img/no-product.png' />
                       
                      </div>
             );
           }
        }

  return (
    <div className='container'>
        <div className='row'>
            {allProducts}
        </div>
      
    </div>
  )
}

export default Products
