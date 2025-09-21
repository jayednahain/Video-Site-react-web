import { createSlice } from "@reduxjs/toolkit";

let initialStatesFilter = {
    tags: [],
    search: ""
}

const filterSlice = createSlice({
    name: "filter",
    initialState: initialStatesFilter,
    reducers: {
        tagSelected: (state, actions) => {
            state.tags.push(actions.payload)
        },
        tagRemoved: (state, actions) => {

            let indexToRemove = state.tags.indexOf(actions.payload);

            if (indexToRemove != -1) {
                state.tags.splice(indexToRemove, 1);
            }
        },
        searching: (state, actions) => {
            state.search = actions.payload
        }
    }

})

let filterReducer = filterSlice.reducer;
export default filterReducer;

export const { tagSelected, tagRemoved, searching } = filterSlice.actions;