import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    store:[],
    counter: 0,
    price: 0,
}

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState,
    reducers: {
        addProduct(state, action) {
            state.store.push(action.payload)
        },
        removeProduct(state) {
            state.store.pop()
        },
        increment(state) {
            state.counter = state.counter + 1
        },
        decrement(state) {
            if(state.counter > 0) {
                state.counter  = state.counter - 1
            }
        }

    }
})

export default toolkitSlice.reducer
export const {addProduct, removeProduct, increment, decrement} = toolkitSlice.actions