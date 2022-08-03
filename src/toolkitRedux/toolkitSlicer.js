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
            state.counter = initialState.counter;
        },
        removeProduct(state, action) {
            state.store =  state.store.filter((item) => action.payload.id !== item.id);
            state.counter = initialState.counter;
        },

        increment(state) {
            state.counter = state.counter + 1;
        },

        decrement(state) {
            if(state.counter > 0) {
                state.counter  = state.counter - 1;
            }
        },

        CounterChangerDecrement(state, action) {
            const func = (counter, price) => {
                let newPrice = price / (counter + 1)
                if(counter <= 0) {
                    counter = 1;
                    return newPrice*counter;
                }
                return (newPrice * counter);
            }
            state.store.map((item) => ((item.id === action.payload.id) && (item.itemCounter >= 1)) ?
                (item.itemCounter--) && (item.price = func(item.itemCounter, item.price))
                : null
            );
        },

        CounterChangerIncrement(state, action) {

            const func = (counter, price) => {
                let newPrice = (price / (counter - 1));
                return newPrice * counter;
            }
            state.store.map((item) => item.id === action.payload.id ?
                (item.itemCounter++) && (item.price = func(item.itemCounter, item.price))
                : null
            );
        },
    }
})

export default toolkitSlice.reducer;
export const {
    addProduct,
    removeProduct,
    increment,
    decrement,
    CounterChangerDecrement,
    CounterChangerIncrement,
                    } = toolkitSlice.actions;