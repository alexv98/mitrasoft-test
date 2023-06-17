import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from 'redux-saga'
import postReducer from "./postReducer";
import {rootWatcher} from "./saga";
import commentReducer from "./commentReducer";
import pageReducer from "./pageReducer";


const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer,
  page: pageReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootWatcher)