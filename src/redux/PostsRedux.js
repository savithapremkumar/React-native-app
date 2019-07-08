import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  postsRequest: ['userID'],
  postsSuccess: ['posts'],
  postsFailure: null
})

export const PostsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  posts: null
})

/* ------------- Selectors ------------- */

export const PostsSelectors = {
  selectPosts: state => state.posts.posts
}

/* ------------- Reducers ------------- */

// request the posts for a user
export const request = (state, { userID }) =>
  state.merge({ fetching: true, userID, posts: null })

// successful posts 
export const success = (state, action) => {
  const { posts } = action
  return state.merge({ fetching: false, error: null, posts })
}

// failed to get the posts
export const failure = (state) =>
  state.merge({ fetching: false, error: true, posts: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POSTS_REQUEST]: request,
  [Types.POSTS_SUCCESS]: success,
  [Types.POSTS_FAILURE]: failure
})
