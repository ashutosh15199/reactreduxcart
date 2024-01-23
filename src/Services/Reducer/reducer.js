
import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../../store/userSlice'
const store = configureStore({
    reducer: {
      user: cartSlice,
    }
  })
  export default store
