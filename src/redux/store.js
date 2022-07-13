import {configureStore} from '@reduxjs/toolkit'
import team from "redux/reducers/teamReducer";

export const store = configureStore({
    reducer: {
        team
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
