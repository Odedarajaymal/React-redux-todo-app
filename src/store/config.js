import {createStore,combineReducers} from  'redux'
import todoList from '../reducer/todo'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

 export default ()=>{
    const store = createStore(combineReducers({
        todos:todoList
    }),
    applyMiddleware(thunk)
    )
    return store
 }
