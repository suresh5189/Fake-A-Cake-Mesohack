import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from "../features/users/userSlice";
import moiveReducer from '../features/movie/movieSlice';

export default configureStore({
    reducer : {
        user : userReducer,
        movie : moiveReducer,
    },
    middleware : getDefaultMiddleware({
        serializableCheck : false,
    }),
});
