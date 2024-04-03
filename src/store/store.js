import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slice'
import darkmod from './darkmod'
import connexion from './connexion'
import panier from './panier'


export default configureStore({
  reducer: {
    counter: counterReducer,
    color: darkmod,
    connect: connexion,
    panier: panier,
    
  },
  devTools:true
})