import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminProducts from '../Pages/Admin/AdminProducts'
import AdminSetting from '../Pages/Admin/AdminSetting'
import Dashboard from '../Pages/Admin/Dashboard'
import Users from '../Pages/Admin/Users'
import Home from '../Pages/Home'
import PageNotFound from './PageNotFound'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/computer_glasses'></Route>
            <Route path='/kids_glasses'></Route>
            <Route path='/admin_dashboard' element={<Dashboard/>}></Route>
            <Route path='/admin_users' element={<Users/>}></Route>
            <Route path='/admin_product' element={<AdminProducts/>}></Route>
            <Route path='/admin_settings' element={<AdminSetting/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
           
        </Routes>
    </div>
  )
}

export default AllRoutes