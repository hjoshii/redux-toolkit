import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    status:null,
    posts:[]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = { name: "Kamal", age: 26 }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos.pop()
        },
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchPosts.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action)=>{
            state.posts = action.payload;
            state.status = 'success'
        })
        .addCase(fetchPosts.rejected, (state, action)=>{
            state.status = 'error'
        })
    }   
})


export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = result.json()
    return res
})


export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer