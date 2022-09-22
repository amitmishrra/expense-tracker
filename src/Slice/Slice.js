import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    currBalance : 0,
    history : []
}

export const balanceSlice = createSlice({
    name : 'balance',
    initialState,
    reducers : {
        updateBalance : (state, action) =>{
            state.currBalance = action.payload
        },
        updateHistory : (state, action) =>{
            state.history = action.payload
        }
    }
})

export const {updateBalance, updateHistory} = balanceSlice.actions

export default balanceSlice.reducer