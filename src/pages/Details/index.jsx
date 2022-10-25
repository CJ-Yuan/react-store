//这是详情页的组件
import React from 'react'
//useParams 用于读取路由携带的参数
import { useParams } from 'react-router-dom'
import DetailsList from './DetailsList';


export default function Details() {

    const params = useParams();

  return (
    <div>
        <DetailsList id={params.id}/>
    </div>
  )
}
