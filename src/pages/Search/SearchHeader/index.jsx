//这是搜索页面头部组件
import React from 'react'
import SearchInput from '../../../components/Searchlnput'
import './style.less'

export default function SearchHeader() {
  //返回上一页
  function backHandle(){
    //返回
    window.history.back()
  }

  return (
    <div id="search-header" className="clear-fix">
      <span className="back-icon float-left" onClick={ backHandle }>
          <i className="icon-chevron-left"></i>
      </span>
      <div className="input-container">
          <i className="icon-search"></i>
          <SearchInput />
      </div>
  </div>
  )
}
