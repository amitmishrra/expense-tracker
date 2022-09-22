import { configureStore } from '@reduxjs/toolkit'
import { balanceSlice } from '../Slice/Slice';

 const store = configureStore({
    reducer : {
        balance : balanceSlice
    }
})

export default store;