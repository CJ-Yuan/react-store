//这是配置路由组件
import React from 'react'
import {Route,Routes} from "react-router-dom"

import Layout from '../pages/Main/Layout'

import Home from '../pages/Main/Home'
import LifeService from '../pages/Main/LifeService'
import Shop from '../pages/Main/Shop'
import User from '../pages/Main/User'
import City from '../pages/City'
import Search from '../pages/Search'
import Details from '../pages/Details'

export default function AppRouter() {
  return (
    <div>
      {/* 注册路由 */}
        <Routes>
          <Route  path='/city' element={<City />}></Route>
          <Route  path='/details/:id' element={<Details />}></Route>
          <Route  path='/search/:keywords' element={<Search />}></Route>
          
          
          {/* 将底部导航设置成二级路由，适用于需要导航的页面 */}
          <Route path='/*' element={<Layout>
            <Route  path='/' element={<Home />}></Route>
            <Route  path='/life' element={<LifeService />}></Route>
            <Route  path='/shop' element={<Shop />}></Route>
            <Route  path='/user' element={<User />}></Route>
          </Layout>}>
          </Route>
        </Routes>
    </div>
  )
}
