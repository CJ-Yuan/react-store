import { INIT_CITY,CHENAGE_CITY} from '../constants'

//初始化城市
export function initCity(cityName){
    return{
        type:INIT_CITY,
        cityName
    }
}

//改变城市
export function changeCity(cityName){
    return{
        type:CHENAGE_CITY,
        cityName
    }
}