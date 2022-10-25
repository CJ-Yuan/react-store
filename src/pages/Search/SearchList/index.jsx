//这是用于请求搜索列表数据的组件，并交给SearchListView渲染
import React,{useState,useEffect,useCallback} from 'react'
import SearchListView from '../SearchListView'
import api from '../../../api'
import LoadMore from '../../../components/LoadMore'


export default function SearchList(props) {
    //用来储存请求回来的数据
    const [searchData,setSearchData] = useState([])

    //用来判断数据是否全部加载完毕
    const [hasMore,setHasMore] = useState(false)

    //获得一个在渲染期间不会改变的记忆回调
    const http = useCallback(()=>{
        api.search({
            search:props.search
        }).then(res => {
            if(res.data.status === 200){
                //将请求回来的数据，储存
                setSearchData(data => data.concat(res.data.result.data))
                setHasMore(res.data.result.hasMore)
            }
        }).catch(error =>{
            console.log(error)
        })
        //如果props.search的值发生变化，就会重新执行
    },[props.search])


    useEffect(()=>{
        http();

        //组件卸载后执行
        return ()=>{
            setSearchData([]);
            setHasMore(false)
        }
    },[http])


    function LoadMoreHandle(){
        http();
        console.log("需要加载数据")
    }

  return (
    <div>
        {
            searchData.length > 0? <SearchListView search={ searchData } /> : <div>等待数据加载.....</div>
        }
        
        {
            //通过判断数据是否全部加载完成
            hasMore ? <LoadMore onLoadMore={LoadMoreHandle} /> : <div>全部数据加载完毕</div>
        }
        
    </div>
  )
}
