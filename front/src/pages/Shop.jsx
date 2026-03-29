import React, { useEffect, useState } from 'react'
import sun from '../assets/1-1_b4ae866f-e0a8-43d1-971f-1d143d76f01c.webp';
import blue from '../assets/1-72-hrs-gel---listing.webp'
import lip from '../assets/1_b3dbb0f7-5633-401b-9cf5-e12c75cc398c.webp'

import './Shop.css'

const Shop = () => {

  const [shop, setShop] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/getkey').then((res)=>res.json()).then((data)=>{
      setShop(data)
    })
  },[])



  const order = [
  {
    image: sun,
    name: "Vitamin C Face Serum",
    price: 500,
    type: "All Skin Types"
  },
 
  {
    image: blue,
    name: "Blue Barrier Moisturizer",
    price: 500,
    type: "Oily Skin"
  },
  {
    image: lip,
    name: "Strawberry LipBalm",
    price: 300,
    type: "Strawberry Red"
  },
 
]
  

  return (
<div>
<div className='container mt-4'>
  <div className='row'>
    {shop.map((item)=>(
      <div className='col-lg-4 col-md-6 col-sm-12 mb-4' key={item._id}>
      <div className='card text-center h100'>
      <img src={item.img} className='card-img-top shop' alt={item.title} style={{height:"250px",width:"200px",marginLeft:"100px"}}/>

<div className='card-body'>
  <h5>${item.price}</h5>
  <p>{item.des}</p>
  <button className='btn btn-danger'>Add to Cart</button>
  </div>
          </div>
        </div>
      
    ))}
  </div>
</div>

</div>
  

   
  )
}

export default Shop
