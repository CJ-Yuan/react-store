import { INIT_CITY,CHENAGE_CITY} from '../constants'

const defaulState = {
    cityName:"北京",
}

const city = (state=defaulState,action)=>{
    switch(action.type){
        case INIT_CITY:
            return {
                cityName:action.cityName
            };
        case CHENAGE_CITY:
            return {
                cityName:action.cityName
            };
        default:
            return state;
    }
}

export default city