import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name:"counter",
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset:(state) =>{
      state.value= 0
    },
    multiply:(state) =>{
      state.value *=2
    },
    divide:(state) =>{
      state.value /=2
    }
    // otp:()=>{
    //   const otp =""
      
    //   for(let i=0; i<4;i++)
    //   {
    //     let random =  Math.floor(Math.random()*10)
    //     otp+=random
    //   }
      
    // }

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})


export const { increment, decrement, incrementByAmount,reset ,multiply,divide} = counterSlice.actions

export default counterSlice.reducer