import axios from "../utils/request"


//路径地址
const base = {
    baseUrl:"http://localhost:5566",
    cityUrl:"/api/aj/getcitycode",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
    search:"/api/search",
    details:"/api/details",

}


//请求方法
const api = {
    // 获取首页热门产品
    getHomtHot1(params){
        return axios.get(base.baseUrl + base.homehot1,{params})
    },
    getHomtHot2(params){
        return axios.get(base.baseUrl + base.homehot2,{params})
    },
    //城市列表
    getCityLists(){
        return axios.get(base.cityUrl)
    },
    //搜索
    search(params){
        return axios.get(base.baseUrl + base.search,{params})
    },
    //详情页
    details(params){
        return axios.get(base.baseUrl + base.details,{params})
    },
}

export default api;