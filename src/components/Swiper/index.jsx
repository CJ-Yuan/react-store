// 这是轮播图组件
import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Swiper(props) {
  return (
    <Carousel showArrows={true} autoPlay={true} showThumbs={false} infiniteLoop={true}>
        {
            props.banners.map((ele,index)=>{
                return(
                    <div key={index}>
                        <img src={ele} alt="" />
                    </div>
                )
            })
        }
    </Carousel>
  )
}
