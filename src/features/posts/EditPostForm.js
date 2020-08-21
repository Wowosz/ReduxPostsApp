import React, { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'

import {postEdited} from './postsSlice'

export const EditPostForm = ({match}) => {
  const { postId } = match.params

  const post = useSelector(state => state.posts.find(post => post.id === postId))

  const [title, setTitle] = useState(post.title)
  const [content, setContent] =useState(post.content)

  const dispatch = useDispatch()
  const history = useHistory()
}