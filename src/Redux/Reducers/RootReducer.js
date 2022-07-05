import {combineReducers} from 'redux'
import {CarReducer} from './CarReducer'
import {AnimationReducer} from './AnimationReducer'

export default combineReducers({
    items: CarReducer,
    animations: AnimationReducer
})