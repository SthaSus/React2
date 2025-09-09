import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ReadAllProduct = () => {
  let [product,setProduct] = useState([])

  const getData=async()=>{
    let result = await axios({
      url : 'https://68bd00b90f2491613ee03209.mockapi.io/product',
      method: 'get',
    });
    setProduct(result.data)
  };
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      {product.map((value,i)=>{
        return (<div style={{border: 'solid red 2px'}}>
          <p>name: {value.name}</p>
          <p>price: {value.price}</p>
          <p>quantity: {value.quantity}</p>
        </div>)
      })}
    </div>
  )
}

export default ReadAllProduct
