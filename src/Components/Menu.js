import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import Footer from './Footer/Footer';
import Header from './Header/Header';


function Menu() {
  return (
    <div>
        <Header/>
 
        <Outlet/>
         <Footer />
    </div>
  )
}

export default Menu
