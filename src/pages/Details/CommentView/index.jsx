import React from 'react'
import './style.less'
import Item from './item'


export default function CommentView(props) {
    const data = props.data;
  return (
    <div className='comment-list'>
        <ul>
            {
                data.map((ele,index)=>{
                    return <Item data={ ele } key={index}/>
                })
            }
        </ul>
    </div>
  )
}
