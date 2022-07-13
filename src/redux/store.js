import {configureStore} from '@reduxjs/toolkit'
import team from "redux/reducers/teamReducer";
import about from "redux/reducers/aboutReducer";

export const store = configureStore({
    reducer: {
        team,
        about
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
})
