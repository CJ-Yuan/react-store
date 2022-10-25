import React,{useState,useEffect} from 'react'
//useNavigate用于路由跳转,useParams用于读取路由对象
import { useNavigate,useParams } from "react-router-dom"
//useSelector 用于读取数据 useDispatch 用于获取Dispatch对象
import { useSelector,useDispatch } from 'react-redux'
import * as searchAction from '../../redux/actions/search'
import './style.less'


export default function Searchlnput() {

  const navigate  = useNavigate();
  const params = useParams();
  //用于储存输入框的值
  const [keywords,setkeywords] = useState("")

  const dispatch = useDispatch();
  const reduxKeywords = useSelector(state => state.search);

  //键盘的回调
  function keyUpHandle(e){
    if(keywords.length > 0){
      if(e.keyCode === 13){
        navigate('/search/'+keywords)
        dispatch(searchAction.updaetSearch(keywords))
      }
    }
  }

  function changeHandle(e){
    setkeywords(e.target.value)
  }

  // 回传
  useEffect(()=>{
    if(params.keywords){
        dispatch(searchAction.updaetSearch(params.keywords))
    }else{
      dispatch(searchAction.updaetSearch(""))
    }
    setkeywords(reduxKeywords.search)
    
  },[reduxKeywords.search,params.keywords,dispatch])


  return (
    //onKeyUp 键盘事件对象  onChange 监听输入框数值变化
    <input className='search-input' type="text" onKeyUp={keyUpHandle} value={keywords} onChange={ changeHandle}/>
  )
}
