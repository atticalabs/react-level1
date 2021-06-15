import { createSlice } from '@reduxjs/toolkit'

export const mySlice = createSlice({
    name: 'mySlice',
    initialState: {
        lists: [],
    },
    reducers: {
        add: (state, action) => {
            state.lists = [...state.lists, { value: action.payload }];
        }
    },
})

export const mySliceActions = mySlice.actions;

export default mySlice;