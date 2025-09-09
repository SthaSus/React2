import axios from 'axios'
import React, { useState } from 'react'

const CreateUser = () => {
    let [user,setUser] = useState('Name')
    let [email,setEmail] = useState('abc@email.com')
    let [password,setPassword] = useState()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        let data={
            user: user,
            email:email,
            password:password,
        }
        
        // console.log(data)
        
        let result = await axios({
          url: 'https://68bd00b90f2491613ee03209.mockapi.io/user',
          method: 'post',
          data: data
        });
    }

  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <section>
            <div>
                <label htmlFor="name">User Name</label>
                <input type="text" id='name' value={user} onChange={(e)=>{setUser(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
        </section>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default CreateUser
