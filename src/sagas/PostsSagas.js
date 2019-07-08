import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import PostsActions from "../redux/PostsRedux";

export function* getUserPosts(api, action) {
  const { userID } = action;
  // make the call to the api
  const response = yield call(api.getPosts, userID);

  if (response.ok) {
    const posts = response.data;
    // do data conversion here if needed
    yield put(PostsActions.postsSuccess(posts));
  } else {
    yield put(PostsActions.postsFailure());
  }
}
