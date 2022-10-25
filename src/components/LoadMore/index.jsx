//这是上拉加载的组件
import React,{useEffect,useRef,useState} from 'react'
import './style.less'

const LoadMore = (props) => {
    const more = useRef();
    //用于储存距离顶部的数值
    const[loadTop,setLoadTop] = useState(10000)

    useEffect(()=>{
        
        let timer = null;
        //获取视口高度
        let winHeight = document.documentElement.clientHeight;

        
        function scorllHandle(){
            if(more.current){
                //获取当前距离顶部的数值，并储存
                setLoadTop(more.current.getBoundingClientRect().top)
                //防抖在一定时间内只执行一次
                if(timer){
                    clearTimeout(timer);
                }else{
                     timer = setTimeout(()=>{
                        //当前总视口高度 > 当前距离顶部的距离
                        if(winHeight > loadTop){
                            props.onLoadMore();
                        }
                    },300)
                }
               }
        }
        //该addEventListener()方法是注册事件监听器的推荐方法
        window.addEventListener("scroll",scorllHandle);

        //组件卸载后执行
        // return()=>{
        //     //该接口的removeEventListener()方法从目标EventTarget中删除先前注册的事件侦听器
        //     window.removeEventListener("scroll",scorllHandle);
        //     clearTimeout(timer);
        // }
    },[loadTop,props])


  return (
    <div className='load' ref={more}>
        加载更多
    </div>
  )
}

export default LoadMore