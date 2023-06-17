import axios from "axios";
import {FETCH_USER_POSTS, setUserPosts} from "../postReducer";
import {call, put, takeEvery} from 'redux-saga/effects'

const callUserPosts = (id) => axios.get('https://jsonplaceholder.typicode.com/posts?userId=' + id)

function* callUserPostsWorker(action) {
  const response = yield call(callUserPosts, String(action.payload))
  yield put(setUserPosts(response.data))
}

export function* callUserPostsWatcher() {
  yield takeEvery(FETCH_USER_POSTS, callUserPostsWorker)
}