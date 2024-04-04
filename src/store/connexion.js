import { createSlice } from '@reduxjs/toolkit'

// log in and register reducer

export const connexion = createSlice({
  name: 'connect',
  initialState: {
    name:["tribelha","artus"],
    password:["guest","admin"],
    status:false,
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
    logintru: (state, action) => {
      state.status = action.payload
    },
  },
})

export const { verify, registername, registermdp, logintru} = connexion.actions

export default connexion.reducer