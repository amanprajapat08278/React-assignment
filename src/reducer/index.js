import changeNumber from "./counter.js"
import { combineReducers } from "redux"



const rootReducer = combineReducers({ changeNumber })

//const rootReducer = combineReducers({ changeNumber, 2, 3, ... })
//const rootReducer = combineReducers({ changeNumber:changeNumber })

export default rootReducer 