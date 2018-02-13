import {combineReducers} from 'redux'

import {
    FETCH_WEATHER_SUCCESS, FETCH_WEATHER_ERROR    
} from '../actions'


function weatherReducer(state=[], action){
    console.log('Action:', action)
    switch(action.type){
        case FETCH_WEATHER_SUCCESS:
            return [action.payload, ...state]
    }
    return state;
}


const rootReducer = combineReducers({
    weather: weatherReducer
})

export default rootReducer