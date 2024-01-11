import { PRODUCT_ADD_SUCCESS, PRODUCT_FAILED, PRODUCT_GET_SUCCESS, PRODUCT_LOADING } from "./actionType";

const initialState = {
    isLoading:false,
    isError:false,
    product:[]
}

export const ProductReducer = (state=initialState,{type,payload})=>{
    switch(type){

        case PRODUCT_LOADING:{
            return {...state,isLoading:true}
        }
        case PRODUCT_FAILED:{
            return {...state, isLoading:false,isError:true};
        }
        case PRODUCT_GET_SUCCESS:{
            return {...state , isLoading:false,product:payload}
        }
        case PRODUCT_ADD_SUCCESS:{
            return {...state, isLoading:false,product:[...state.product,payload]}
        }
        default:{

            return state;
        }
    }
}