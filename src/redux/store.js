import { configureStore } from '@reduxjs/toolkit'
import navReducer from '../redux/navSlice'

export default configureStore({
    reducer: {
        navigation: navReducer,
    },
})