import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    content: [],
}

export const about = createSlice({
    name: 'about',
    initialState,
    reducers: {
        setAbout: (state, action) => {
            state.content = action.payload
        },
    },
})

export const {setAbout} = about.actions

export default about.reducer
