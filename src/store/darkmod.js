import { createSlice } from '@reduxjs/toolkit'

export const color = createSlice({
  name: 'color',
  initialState: {
    actual:false,
     
  },
  reducers: {

    colorset: (state, action) => {
      state.actual = action.payload
    },
  },
})

export const {colorset} = color.actions

export default color.reducer