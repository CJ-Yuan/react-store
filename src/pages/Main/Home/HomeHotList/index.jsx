//该组件用于请求数据，并传递给HomeHotView进行渲染
import React,{useState,useEffect} from 'react'
import api from '../../../../api'
import HomeHotView from '../HomeHotView'

export default function HomeHotList(props) {
    const [hot1List,setHot1List] = useState([])
    const [hot2List,setHot2List] = useState([])

    //本应该由后端返回数据渲染不同页面，但是本人技术不行会报错 React Hook useEffect has a missing dependency: 'props.cityName'. Either include it or remove the dependency array
    //const [city,setCity] = useState(props.cityName)
    // //获取Hot1
    // useEffect(()=>{
    //     // 向服务器传递不同城市，根据城市获取相应的数据
    //     api.getHomtHot1({cityName:props.cityName}).then((res)=>{
    //          if(res.data.status === 200){
    //             setHot1List(res.data.result) 
    //             // setCity(res.data.cityName)
    //             console.log("1",res.data.cityName)
    //          }
    //     })
    // },[]);
    // //获取Hot2
    // useEffect(()=>{
    //     api.getHomtHot2({cityName:props.cityName}).then((res)=>{
    //          if(res.data.status === 200){
    //             setHot2List(res.data.result)
    //             // setCity(res.data.city)
    //          }
    //     })
    // },[]);


        //获取Hot1
        useEffect(()=>{
            // 向服务器传递不同城市，根据城市获取相应的数据
            api.getHomtHot1().then((res)=>{
                 if(res.data.status === 200){
                    setHot1List(res.data.result) 
                 }
            })
        },[]);
        //获取Hot2
        useEffect(()=>{
            api.getHomtHot2().then((res)=>{
                 if(res.data.status === 200){
                    setHot2List(res.data.result)
                 }
            })
        },[]);

  return (
    <div>
        {
            hot1List.length > 0 ? <HomeHotView data={hot1List} city={props.cityName} title={'热门商品'}/> : <div>等待加载数据....</div>
        }
        {
            hot2List.length > 0 ? <HomeHotView data={hot2List} city={props.cityName} title={'新品推荐'}/> : <div>等待加载数据....</div>
        }
    </div>
  )
}
