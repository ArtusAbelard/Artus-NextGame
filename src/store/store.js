import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slice'
import darkmod from './darkmod'
import connexion from './connexion'
import login from './login'

export default configureStore({
  reducer: {
    counter: counterReducer,
    color: darkmod,
    connect: connexion,
    login:login
  },
  devTools:true
})