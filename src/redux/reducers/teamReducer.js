import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    team: [],
}

export const team = createSlice({
    name: 'team',
    initialState,
    reducers: {
        setTeam: (state, action) => {
            state.team = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {setTeam} = team.actions

export default team.reducer
