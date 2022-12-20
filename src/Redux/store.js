import {configureStore} from '@reduxjs/toolkit'
import AuthReducer from './authentication'

const store= configureStore({
    reducer:{
        auth:AuthReducer ,
    }

})