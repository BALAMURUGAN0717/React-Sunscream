import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  return (
    <div>
      <nav>
        <h1 className='dot1'>DOT&KEY</h1>
         <ul>
         <div className='ho'>
          <li><Link to="/shop">Shop All</Link></li>
          <li><Link to="/skintype">Skin Type</Link></li>
          <li><Link to ="/Best">Best Seller</Link></li>
          <li><Link to ="/Arrivals">New Arrivals</Link></li>
          <li><Link to ="/Skin">Skin Concern</Link></li>
          <li><Link to ="/About">About Us</Link></li>
          <li><Link to="/addmin">Admin</Link></li>
       
         </div>
        </ul>
      </nav>
    
    </div>
    
  )
}

export default Navbar
