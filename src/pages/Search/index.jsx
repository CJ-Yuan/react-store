import React from 'react'
//useParams 用于路由传参后接收数据
import { useParams } from 'react-router-dom'

import SearchList from './SearchList'
import SearchHeader from './SearchHeader';

export default function Search() {
  const params = useParams();
  return (
    <div>
      <SearchHeader />
      <SearchList search={params.keywords}/>
    </div>
  )
}
