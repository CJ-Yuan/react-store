//
import React, { useState } from 'react'
import  './style.less'
import DefaultImg from '../../../../assets/images/default.png'
//图片异步加载处理
import {loadImageAsync} from '../../../../utils/loadImg'
import { Link } from 'react-router-dom'




export default function Item(props) {
    const data = props.data
    const [currentImg, setCurrentImg] = useState(DefaultImg)

    
    loadImageAsync(data.img).then(res => {
        setCurrentImg(res)
    }).catch(error => {
        console.log(error);
    })
  return (
    <div className="list-item">
        <Link to={`/details/${data.id}`}>
            <img src={currentImg} alt="" />
            <div className="mask">
                <div className="left">
                    <p>{data.title}</p>
                    <p>{data.houseType}</p>
                </div>
                <div className="right">
                    <div className="btn">
                        {data.rentType}
                    </div>
                    {/* dangerouslySetInnerHTML 渲染HTML结构 */}
                    <p dangerouslySetInnerHTML={{ __html: data.price + "元/月" }}></p>
                </div>
            </div>
        </Link>
    </div>
  )
}
