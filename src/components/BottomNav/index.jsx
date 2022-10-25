// 这是底部导航的公共组件
import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

export default function BottomNav() {
  return (
    <div className='nav-footer'>
        <ul className='cleat-fix'>
            <li>
                <NavLink end to="/">
                    <i className='iconfont icon-home'></i>
                    首页
                </NavLink>
            </li>
            <li>
                <NavLink  to="/life">
                    <i className='iconfont icon-trophy'></i>
                    生活服务
                </NavLink>
            </li>
            <li>
                <NavLink  to="/shop">
                    <i className='iconfont icon-shop'></i>
                    商城
                </NavLink>
            </li>
            <li>
                <NavLink  to="/user">
                    <i className='iconfont icon-team'></i>
                    我的
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

