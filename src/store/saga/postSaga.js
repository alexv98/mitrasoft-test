import axios from "axios";
import { put, takeEvery, call } from 'redux-saga/effects'
import {FETCH_POSTS, setPosts} from "../postReducer";

const callPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts')

function* callPostsWorker() {
  const response = yield call(callPosts)
  yield put(setPosts(response.data))
}

export function* callPostsWatcher() {
  yield takeEvery(FETCH_POSTS, callPostsWorker)
}