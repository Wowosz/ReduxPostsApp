import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id: '1', title: 'First Post', content: ' Hello!'},
    { id: '2', title: 'Second Post', content: 'More text' }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        },
        postEdited(state, action) {
            const { id, title, content } = action.payload
            const post = state.find(post => post.id === id)
            if (post) {
                post.title = title
                post.content = content
            }
        }
    }
})

export const { postAdded, postEdited } = postSlice.actions

export default postSlice.reducer