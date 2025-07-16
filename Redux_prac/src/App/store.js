import { configureStore } from "@reduxjs/toolkit";

import counterReducer  from '../Feature/CounterSlice'

import dataReducer  from '../Feature/DataSlice'

export const store = configureStore({
    reducer:{
       counter: counterReducer,
       home:dataReducer,
    },

})