import {combineReducers} from 'redux'
import {CarReducer} from './CarReducer'

export default combineReducers({
    items: CarReducer
})