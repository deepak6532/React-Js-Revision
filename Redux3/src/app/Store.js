import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../slice/AuthSlice.js'



export const store = configureStore({
  reducer: {
    auth:authReducer,
  },
})