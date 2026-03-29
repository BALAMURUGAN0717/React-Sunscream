import React from 'react'
import pic from '../assets/OIP (2).jpg'

const Add = () => {
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        const form = e.target
        const title = form.title.value
        const img  = form.img.value
        const price = form.price.value
        const des = form.des.value
      

        if(title==="" || img==="" || price===""){
            alert("fill all the feilds")
            return
        }

        const obj={
            title,
            img,
            price,
            des
            
        }

        fetch("http://localhost:5000/uploadkey",{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(obj)
        }).then((res)=>res.json()).then((data)=>{
            alert("data uploaded succssfullly")
            form.reset()
            window.location.href="/Dot"
        })
    }
  return (
    <div>
       <div className='sidebar'>
   

<div className="sidebar1">
   <p className='logo'>Logo</p>
<p className='dot'onClick={()=>window.location.href="/dot"}>Dot</p>
 <p className='Key'>Key</p>

</div>

    </div>

      <section>
      <form onSubmit={handleSubmit} className='form'>
        <img src={pic} className='pho' alt=''/>
        <div className='inn'>Login</div>
        <label value="title">Title</label>
        <input type="text" name="title" id='title'/>
        <label value="img">Img</label>
        <input type="text" name='img' id='img'/>
        <label value="des">Des</label>
        <input type="text" name="des" id='des'/>
        <label value="price">Price</label>
        <input type="text" name="price" id='price'/>
         <button type='submit' className='sub1'>Submit</button>
      </form>
      </section>
      
    </div>
   
   
  )
}

export default Add
