import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = { name: "Kamal", age: 26 }
            state.users.push(user)
        },
        removeUser: (state, action) => {
            state.users.pop()
        },
    }
})


export const { addUser, removeUser } = userSlice.actions
export default userSlice.reducer