import {callPostsWatcher, } from "./postSaga";
import {all} from 'redux-saga/effects'
import {callCommentsWatcher} from "./commentSaga";
import {callUserPostsWatcher} from "./userPostSaga";

export function* rootWatcher() {
  yield all([callPostsWatcher(), callCommentsWatcher(), callUserPostsWatcher()])
}