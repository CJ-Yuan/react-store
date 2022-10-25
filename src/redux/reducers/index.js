/*
    该文件用于汇众所有的 reducer 为一个总的 reducer 
*/ 
//combineReducers 用于合并 reducer
import {combineReducers} from 'redux';

//引入改变城市的 reducer
import city from './city';
//用于储存历史搜索框的值 reducer
import search from './search'

const rootReducer = combineReducers({
    city,
    search
})

export default rootReducer