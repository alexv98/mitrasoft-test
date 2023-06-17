import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects'
import {FETCH_COMMENTS, setComments} from "../commentReducer";

const callComments = (id) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

function* callCommentsWorker(action) {
  const response = yield call(callComments, String(action.payload))
  yield put(setComments(response.data))
}

export function* callCommentsWatcher() {
  yield takeEvery(FETCH_COMMENTS, callCommentsWorker)
}