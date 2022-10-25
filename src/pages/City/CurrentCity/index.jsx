// 这是渲染当前城市的组件
import React from 'react'
import './style.less'

export default function CurrentCity(props) {
  return (
    <div className="current-city">
        <h2>当前城市：{props.city}</h2>
    </div>
  )
}
