import React, { useEffect, useState } from 'react' 
import { Link } from "react-router-dom"; 
const Dot = () => { 
  const [dots, setDots] = useState([]) 
  useEffect(() => {
     fetch('http://localhost:5000/getkey') .then((res) => res.json()).then((data) => setDots(data)) 
    }, []) 
    const deletekey = (id) => { 
      fetch(`http://localhost:5000/deletekey/${id}`, { 
        method: "DELETE" 
      }).then((res) => res.json()).then((data) => { 
        alert("data deleted") 
        setDots((prev) => prev.filter((item) => item._id !== id))
       }) }
        return ( 
        <div> 
          <div className='bord'> 
          <div className='sidebar1'> 
          <p className='logo'>Logo</p> 
          <p className='dot'>Dot</p> 
          <p className='Key'>Key</p> 
          </div> 
          <nav> 
          <p className='add1' onClick={() => window.location.href = "/add"}>Add</p> 
          </nav> 
          <table className='tab'> 
            <thead> 
              <tr> 
                <th>Title</th> 
                <th>Img</th> 
                <th>Price</th> 
                <th>Des</th> 
                <th>Action</th> 
                </tr> 
                </thead> 
                <tbody> 
                {dots.map((item) => ( 
                  <tr key={item._id}> 
                  <td>{item.title}</td> 
                  <td><img src={item.img} width={50} alt="Dot" />
                  </td> <td>{item.price}</td> 
                  <td>{item.des}</td> 
                  <td> <button> <Link to={`/update/${item._id}`}>Edit</Link> </button> <button onClick={() => deletekey(item._id)}>Delete</button> </td> 
                  </tr>
                   ))} 
                   </tbody> 
                   </table> 
                   </div> 
                   </div> 
                   ) 
                  } 
                  export default Dot