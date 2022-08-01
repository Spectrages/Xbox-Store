import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from './toolkitSlicer'

const rootReducers = combineReducers({
    toolkit: toolkitSlice
})

export const store = configureStore({
    reducer: rootReducers
})