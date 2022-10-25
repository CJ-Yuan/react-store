// 这是页面的头部的公共组件
import React from 'react'
import './style.less'

export default function PubHeader(props) {
    function backHandle(){
        /**
         * 返回上一页两种方案
         * 
         * hisotry.pushState()
         */
        // props.history.go(-1)
        window.history.back();
    }
  return (
    <div id="common-header">
        <span className="back-icon" onClick={ backHandle }>
            <i className="icon-chevron-left"></i>
        </span>
        <h1>{props.title}</h1>
    </div>
  )
}
