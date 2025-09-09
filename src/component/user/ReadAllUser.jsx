import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ReadAllUser = () => {
  let [users,setUser]= useState([])

  const getData=async()=>{
      let result = await axios({
      url: 'https://68bd00b90f2491613ee03209.mockapi.io/user',
      method: 'get',
    })
    setUser(result.data)
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      {
        users.map((value,i)=>{
          return (
            <div style={{border: 'solid 2px red'}}>
              <p>
              User name : {value.name}
              </p>
            <p>
              email : {value.email}
            </p>
            <p>
              password : {value.password}
            </p>
              <p>
              user : {value.user}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ReadAllUser
