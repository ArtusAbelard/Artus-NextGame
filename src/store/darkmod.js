import { createSlice } from '@reduxjs/toolkit'

// darkmode reducer

export const color = createSlice({
  name: 'color',
  initialState: {
    actual:true,
     
  },
  reducers: {

    colorset: (state, action) => {
      state.actual = action.payload
    },
  },
})

export const {colorset} = color.actions

export default color.reducer