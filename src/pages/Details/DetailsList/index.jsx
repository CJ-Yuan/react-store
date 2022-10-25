import React,{useState,useEffect}  from 'react'
import api from '../../../api';
import DetailsView from '../DetailsView'

export default function DetailsList(props) {

    const [detailsData,setDetailsData] = useState({});

    useEffect(()=>{
        api.details({
            id:props.id
        }).then(res=>{
            if(res.status === 200){
                setDetailsData(res.data)
            }
        })
    },[props])


  return (
    <div>
        {
            detailsData.imgs ? <DetailsView detailsData={detailsData}/> : <div>等待数据加载...</div>
        }
    </div>
  )
}
