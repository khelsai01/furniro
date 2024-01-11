import { PRODUCT_ADD_SUCCESS, PRODUCT_FAILED, PRODUCT_GET_SUCCESS, PRODUCT_LOADING } from "./actionType";
import axios from "axios";
// const URL= "http://localhost:8080"
export const URL = "https://furniro.onrender.com"
export const addProduct = (obj)=>(dispatch)=>{

    dispatch({type:PRODUCT_LOADING})
    try {
       
        axios.post(`${URL}/products/add`,obj).then((data)=>{
            console.log(data.product)
            dispatch({type:PRODUCT_ADD_SUCCESS,payload:data.product})
        })
        
    } catch (error) {
        dispatch({type:PRODUCT_FAILED})
        
    }
   
};

export const getProduct=(obj)=>(dispatch)=>{
    try {
    dispatch({type:PRODUCT_LOADING})

    axios.get(`${URL}/products`,obj).then((data)=>{
        // console.log(data)
        dispatch({type:PRODUCT_GET_SUCCESS,payload:data.data})
    })
    
} catch (error) {
    dispatch({type:PRODUCT_FAILED})
    
}
}