import { createSlice } from '@reduxjs/toolkit'

export const connexion = createSlice({
  name: 'connect',
  initialState: {
    name:["tribelha","artus"],
    password:["guest","admin"],
    
  },
  
  reducers: {

    verify: (state, action) => {
      state.mail = action.payload
    },
    registername: (state, action) => {
      state.name.push(action.payload)
    },
    registermdp: (state, action) => {
      state.password.push(action.payload)
    },
  },
})

export const { verify, registername, registermdp} = connexion.actions

export default connexion.reducer