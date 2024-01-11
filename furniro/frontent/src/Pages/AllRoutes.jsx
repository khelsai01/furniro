import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ProductPage from './ProductPage'
import SingleProduct from './SingleProduct'
import AddProduct from './AddProduct'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/add' element={<AddProduct />} />
        
        </Routes>
    </div>
  )
}

export default AllRoutes