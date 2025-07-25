import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const dataSlice = createSlice({
  name: 'home',
  initialState,

  reducers: {
    data: (state, action) => {
      state.value = action.payload;
    },
    
  },
})

export const { data } = dataSlice.actions

export default dataSlice.reducer
