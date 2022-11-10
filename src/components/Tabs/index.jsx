//这是用于切换视图的组件
import React,{useState} from 'react'
import './style.less'

/**
 * tabs视图结构
 * 
 * 使用结构：
 * <Tabs>
 *     <Tab lable="详情">
 *         <div>
 *             <h3>详情信息</h3>
 *         </div>
 *     </Tab>
 *     <Tab label="评价">
 *         <div>评价信息</div>
 *     </Tab>
 * </Tabs
 * 
 * 
 * 渲染结构：
 * <ul>
 *    <li>详情</li>
 *    <li>评价</li>
 * </ul>
 * <div>详情信息</div>
 * <div>评价信息</div>
 * 
 */

export default function Tabs(props) {
  const [currentIndex,setCurrentIndex] = useState(0)

  function topClikHandle(index){
    setCurrentIndex(index);
  }

  //这是处理样式的回调函数
  function titleClass(index){
    return index === currentIndex ? 'Tab_title active' : 'Tab_title'
  }

  return (
    <div>
      <ul className='Tab_title_wrap'>
        {
          //React.Children.map 用于遍历结构视图
          React.Children.map(props.children,(element,index)=>{
            return <li onClick={()=>topClikHandle(index) } className={titleClass(index)} key={index}>{element.props.label}</li>
          })
        }
      </ul>
      <div>
        {
          React.Children.map(props.children,(element,index)=>{
            return (
              <div>
                { currentIndex === index ? element.props.children : ''}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
