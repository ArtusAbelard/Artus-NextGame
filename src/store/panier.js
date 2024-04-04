import { createSlice } from '@reduxjs/toolkit'

export const panier = createSlice({
  name: 'panier',
  initialState: {
    panier:[],
    img:[],
    id:''  
  },
  reducers: {
    panierset: (state, action) => {
      state.panier.push(action.payload);
    },
    panierremove: (state, action) => {
        state.panier.splice(action.payload,1)
    },
    imgset: (state,action) => {
      state.img.push(action.payload)
    },
    imgremove: (state,action) => {
      state.img.splice(action.payload,1)
    }
  },
})
export const {panierset,panierremove,imgset,imgremove} = panier.actions
export default panier.reducer