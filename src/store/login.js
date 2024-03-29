import { createSlice } from '@reduxjs/toolkit'

export const login = createSlice({
    name: 'login',
    initialState: {
      status:false,
      
    },
    reducers: {
  
      logintru: (state, action) => {
        state.status = action.payload
      },
    },
  })
  
  export const { logintru} = login.actions
  
  export default login.reducer