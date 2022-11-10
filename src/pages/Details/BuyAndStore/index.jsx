//这是处理收藏与购买的数据。并交给BuyAndStoreView渲染
import React from 'react'
import './style.less'
import BuyAndStoreView from '../BuyAndStoreView'
//useSelector 用于读取redux中的数据
import { useSelector } from "react-redux"

export default function BuyAndStore(props) {
  //读取用户信息
  const params = useSelector(state => state.login)
  //读取收藏信息
  const collects = useSelector(state => state.collect)


  return (
    <div>
        <div className="buy-and-store">
            <BuyAndStoreView login={params.user} collects={collects} id={props.id}/>
        </div>
    </div>
  )
}
