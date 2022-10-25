//这是渲染搜索列表的组件,接收数据，并交给Item处理，最后遍历Item
import React from 'react'
import Item from './Item'

export default function SearchListView(props) {
  return (
    <div>
        {
            props.search.map((ele,index)=>{
                return <Item data={ele} key={index}/>
            })
        }
    </div>
  )
}
