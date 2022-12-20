import {createSlice} from '@reduxjs/toolkit';
const initialState={
    jwttoken:''
}


const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        fn1:(state,action)=>{},
        fn2:()=>{},
        fn3:()=>{},
    }
})

export const {fn1,fn2,fn3}=cartSlice.action
export default cartSlice.reducer
