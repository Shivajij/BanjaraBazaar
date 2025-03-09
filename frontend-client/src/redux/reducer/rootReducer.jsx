import { alertReducer } from "./AlertReducer";
import { LoginReducer } from "./LoginReducer";
import { ProductReducer } from "./ProductReducer";
import { combineReducers } from 'redux'

export const rootReducer  = combineReducers({
products: ProductReducer,
user: LoginReducer,
alert: alertReducer
})