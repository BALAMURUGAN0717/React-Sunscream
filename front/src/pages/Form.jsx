import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateForm = () => {

  const { id } = useParams()

  const [updateShop, setUpdateShop] = useState({
    title: "",
    img: "",
    price: "",
    des: ""
  })

  useEffect(() => {
    fetch(`http://localhost:5000/getkey/${id}`).then((res) => res.json()).then((data) => {
    
        setUpdateShop(data)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const form = e.target
    const title = form.title.value
    const img = form.img.value
    const price = form.price.value
    const des = form.des.value

    if (title === "" || img === "" || price === "" || des === "") {
      alert("fill all the fields")
      return
    }

    const obj1 = { 
      title,
      img,
      price,
      des
    }

    fetch(`http://localhost:5000/updatekey/${id}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(obj1)
    }).then((res) => res.json()).then((data) => {
        alert("data updated")
        window.location.href = "/Dot"
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Title</label>
        <input type="text" defaultValue={updateShop.title} name="title" />
        <br />

        <label>Image</label>
        <input type="" defaultValue={updateShop.img} name="img" />
        <br />

        <label>Price</label>
        <input type="" defaultValue={updateShop.price} name="price" />
        <br />

        <label>Description</label>
        <input type="" defaultValue={updateShop.des} name="des" />
        <br />

        <button>Submit</button>

      </form>
    </div>
  )
}

export default UpdateForm