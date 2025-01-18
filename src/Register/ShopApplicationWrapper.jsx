import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/navbar/Navbar'
import Spinner from '../Spinner/Spinner'

const ShopApplicationWrapper = () => {

 
  return (
    <div>
        <Navbar></Navbar>
        <Outlet />
      
    </div>
  )
}

export default ShopApplicationWrapper