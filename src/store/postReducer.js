const defaultState = {
  posts: [],
  userPosts: []
}

export const SET_POSTS = 'SET_POSTS'
export const FETCH_POSTS = 'FETCH_POSTS'
export const SET_USER_POSTS = 'SET_USER_POSTS'
export const FETCH_USER_POSTS = 'FETCH_USER_POSTS'

export default function postReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_POSTS:
      return {...state, posts: action.payload}
    case SET_USER_POSTS:
      return {...state, userPosts: action.payload}

    default:
      return state
  }
}

export const setPosts = payload => ({type: SET_POSTS, payload})
export const fetchPosts = () => ({type: FETCH_POSTS})
export const setUserPosts = payload => ({type: SET_USER_POSTS, payload})
export const fetchUserPosts = payload => ({type: FETCH_USER_POSTS, payload})