import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slice'
import darkmod from './darkmod'

export default configureStore({
  reducer: {
    counter: counterReducer,
    color: darkmod,
  },
  devTools:true
})