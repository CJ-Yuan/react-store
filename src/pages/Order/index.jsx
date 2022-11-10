//这是订单评价的组件
import React,{useEffect} from 'react'
import OrderHeader from "../../components/PubHeader"
import Userlnfo from './Userlnfo'
import OrderList from './OrderList'
import { useNavigate } from "react-router-dom"
//useSelector 用于读取redux中的数据
import { useSelector } from "react-redux"

export default function Order() {

  const navigate = useNavigate();
  const city = useSelector(state => state.city);
  const user = useSelector( state => state.login.user)

  useEffect(()=>{
    //判断是否登录
    if(!user.token){
        navigate('/login')
    }
})


  return (
    <div>
      <OrderHeader title={"订单评价"}/>
      <Userlnfo city={city} user={user}/>
      <OrderList  user={user}/>
    </div>
  )
}
