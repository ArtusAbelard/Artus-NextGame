import { createSlice } from '@reduxjs/toolkit'

export const connexion = createSlice({
  name: 'connect',
  initialState: {
    name:"tribelha",
    password:"guest",
    
    
  },
  reducers: {

    verify: (state, action) => {
      state.mail = action.payload
    },
  },
})

export const { verify} = connexion.actions

export default connexion.reducer