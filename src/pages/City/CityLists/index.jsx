//城市列表组件
import React,{useState,useEffect}from 'react'
import CitySelect from 'react-city-select';
import api from '../../../api'
import cityData from '../../../data/city'
import './style.less'

export default function CityLists(props) {
  const [citysData,setCitysData] = useState(cityData);
  
  // 选中城市回调
  function handleSelectCity(cityData){
    props.onEvent(cityData.name)
  }

  useEffect(()=>{
    api.getCityLists().then((res)=>{
      if(res.status === 200){
        setCitysData(res.data.result.citylist)
      }
    })
  },[])
  return (
    <div className='citylists'>
      <h3>城市列表</h3>
      <CitySelect
      // 传入数据
      data={citysData}
      // 传入回调
      onSelectItem={handleSelectCity}>
    </CitySelect>
    </div>
  )
}
