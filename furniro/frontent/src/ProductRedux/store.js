import {applyMiddleware, legacy_createStore} from "redux"
import {thunk} from "redux-thunk"
import { ProductReducer } from "./Productreducer"


export const store = legacy_createStore(ProductReducer, applyMiddleware(thunk))