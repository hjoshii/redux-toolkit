import {configureStore} from "@reduxjs/toolkit"

import todoReducer from "../app/features/todo/todoSlice"
import userReducer from "./features/user/userSlice"

const store = configureStore({
    reducer:{
        todosData: todoReducer,
        usersData: userReducer
    }
})

export default store;