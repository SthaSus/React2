import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from './component/product/CreateProduct'
import ReadAllProduct from './component/product/ReadAllProduct'
import CreateUser from './component/user/CreateUser'
import ReadAllUser from './component/user/ReadAllUser'

const MyRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/product' element={<ReadAllProduct/>}/>
            <Route path='/product/create' element={<CreateProduct/>}/>
            <Route path='/user' element={<ReadAllUser/>}/>
            <Route path='/user/create' element={<CreateUser/>}/>
        </Routes>
    </div>
  )
}

export default MyRoute
