//这是获取订单评价的数据，并交给OrderListView进行渲染
import React,{useEffect,useState} from 'react'
import api from "../../../api"
import OrderListView from '../OrderListView'

export default function OrderList(props) {

  const [OrderLisData,setOrderListData] = useState([]);

    useEffect(()=>{
        api.commentOrder({
            username:props.user.nick
        }).then(res =>{
            if(res.data.status === 200){
              setOrderListData(res.data.result)
            }
        })
    },[props.user.nick])

  return (
    <div>
      {
        OrderLisData.length > 0 ?  <OrderListView data={OrderLisData} user={props.user}/> : <div>等待数据加载...</div>
      }
    </div>
  )
}
