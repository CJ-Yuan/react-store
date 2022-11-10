//这是购买和收藏的视图
import React,{useState,useEffect} from 'react'
import './style.less'
//useNavigate用于路由跳转
import { useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import * as collectActions from "../../../redux/actions/collect"

export default function BuyAndStoreView(props) {
const navigate = useNavigate()

const dispatcn = useDispatch();

const [isCollect,setIsCollect] = useState()


//初始化操作
useEffect(()=>{
  setIsCollect(isStore());
},[])


function storeHandle(){
  //判断用户是否登录
  if(props.login.token){
    //已登录，允许收藏
    /*
      判断用户是否收藏
      1.收藏则取消收藏
      2.未收藏则收藏
    */
    if(isStore()){
      //以收藏
      console.log('以收藏')
      setIsCollect(false)
      dispatcn(collectActions.removeCollect(props.id))
    }else{
      //未收藏
      console.log('未收藏')
      setIsCollect(true)
      dispatcn(collectActions.setCollect(props.id));
    }
  }else{
    //未登录
    navigate('/login');
  }
}

//用户收藏判定 返回一个 booleaan,true代表收藏，false代表未收藏
function isStore(){
  let collects = props.collects;
  let id = props.id;
  return collects.some(item => {
    return item === id;
  })

}




  return (
    <div className="buy-store-container clear-fix">
        <div className="item-container float-left">
          {
            !isCollect?
            <button className="selected" onClick={ storeHandle }>收藏</button>
            :
            <button className="selected o" onClick={ storeHandle }>已收藏</button>
          }
            
            
        </div>
        
        <div className="item-container float-right">
            <button className="selected">购买</button>
        </div>
    </div>
  )
}
