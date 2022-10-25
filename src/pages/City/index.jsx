// 这是管理城市页面的组件
import React from 'react'
//useNavigate用于路由跳转
import { useNavigate } from "react-router-dom"
//useSelector 用于读取数据 useDispatch 用于获取Dispatch对象
import { useSelector,useDispatch } from 'react-redux'
import { changeCity } from "../../redux/actions/city"

import PubHeader from '../../components/PubHeader'
import CurrentCity from './CurrentCity'
import CityList from './CityList'



import CityLists from './CityLists'

export default function City() {

  // const[city,setCity] = useState("北京")
  const dispatch = useDispatch();

  //读取存储的在redux中的city
  const city = useSelector(state => state.city);

  let navigate  = useNavigate();

  //改变city的值
  function onCityEvent(city){
    dispatch(changeCity(city))
    navigate('/')
  }
  return (
    <div>
        <PubHeader title={"城市选择"}/>
        <CurrentCity city={city.cityName}/>
        <CityList onEvent={ onCityEvent }/>
        <CityLists onEvent={ onCityEvent } />
    </div>
  )
}

