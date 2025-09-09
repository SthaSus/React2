import axios from 'axios'
import React, { useState } from 'react'

const CreateProduct = () => {
    let [name,setName] = useState('name')
    let [price, setPrice] = useState()
    let [quantity, setQuantity] = useState()

    const handleName=(e)=>{
        setName(e.target.value)
    }

    const handlePrice=(e)=>{
        setPrice(e.target.value)
    }

    const handleQuantity=(e)=>{
        setQuantity(e.target.value)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let data = {
            name : name,
            price :  price,
            quantity : quantity,
        }
        console.log(data)

        let result = await axios({
            url : 'https://68bd00b90f2491613ee03209.mockapi.io/product',
            method : 'post',
            data: data,
        })
        // send data to backend
        /* 
        let result = await axios({
        url: ''                 backend ko url/product
        method: ''              post/get/delete
        data: data
        }) */
    }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <section>
            <div>
                <label htmlFor="name">Product Name</label>
                <input type="text" name="name" id="name" value={name} onChange={handleName}/>
            </div>
            <div>
                <label htmlFor="price">Product price</label>
                <input type="number" name="price" id="price" value={price} onChange={handlePrice}/>
            </div>
            <div>
                <label htmlFor="quantity">Product quantity</label>
                <input type="number" name="quantity" id="quantity" value={quantity} onChange={handleQuantity}/>
            </div>
        </section>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateProduct
