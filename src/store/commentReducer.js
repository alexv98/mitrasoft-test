const defaultState = {
  comments: [],
}

export const SET_COMMENTS = 'SET_COMMENTS'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'

export default function commentReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_COMMENTS:
      const findItems = [...state.comments].find(item => item.id === action.payload[0].postId)
      if(findItems) {
        break
      }
      return {...state, comments: [...state.comments, {id: action.payload[0].postId, items: [...action.payload]}]}

    default:
      return state
  }
}

export const setComments = payload => ({type: SET_COMMENTS, payload})
export const fetchComments = payload => ({type: FETCH_COMMENTS, payload})
