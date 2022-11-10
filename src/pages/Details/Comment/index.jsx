//这是用于请求评价的数据组件，并交给CommentView进行渲染
import React,{useState,useEffect} from 'react'
import CommentView from '../CommentView'
import api from '../../../api'
import { comment } from 'postcss';
import LoadMore from "../../../components/LoadMore"

export default function Comment(props) {

    const [Comment,setComment] = useState([]);
    const [hasMore,sethasMore] = useState(false);

    useEffect(()=>{
        http();
    },[])

    function loadMoreHandle(){
        //加载更多的操作
        http();
    }

    function http(){
        api.comment({id:props.id}).then(res=>{
            if(res.data.status === 200){
                //.concat方法数据合并
                setComment(data => data.concat(res.data.result.data));
                sethasMore(res.data.result.hasMore);
            }
        }).catch(error =>{
            console.log(error)
        })
    }

  return (
    <div>
        {
            comment.length > 0 ? <CommentView data={Comment}/> : <div>等待数据加载中.....</div> 
        }
        {
            hasMore ? <LoadMore onLoadMore={ loadMoreHandle }/> : <div>数据加载完毕</div> 
        }
    </div>
  )
}
