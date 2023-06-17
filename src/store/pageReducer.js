export const pages = [
  {name: 'Список постов', path: '/'},
  {name: 'Обо мне', path: '/me'},
]

const defaultState = {
  activePage: pages[0],
}

export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'

export default function pageReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      const findPage = pages.find(page => {
        if(page.path === action.payload) {
          return page
        } else {
          return ''
        }
      })
      return {...state, activePage: findPage}

    default:
      return state
  }
}

export const setActivePage = payload => ({type: SET_ACTIVE_PAGE, payload})
