import { takeEvery, all } from "redux-saga/effects";
import API from "../services/Api";
import FixtureAPI from "../services/FixtureApi";
import DebugConfig from "../config/DebugConfig";

/* ------------- Types ------------- */

import { StartupTypes } from "../redux/StartupRedux";
import { ProposalTypes } from "../redux/ProposalRedux";
import { PostsTypes } from "../redux/PostsRedux";
import { AuthTypes } from "../redux/AuthRedux";

/* ------------- Sagas ------------- */

import { startup } from "./StartupSagas";
import { getUserProposal, putUserProposal } from "./ProposalSagas";
import { getUserPosts } from "./PostsSagas";
import { postAuth } from "./AuthSagas";

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create();

/* ------------- Connect Types To Sagas ------------- */

function* watchAuthAsync() {
  yield takeEvery(AuthTypes.AUTH_REQUEST, postAuth, api);
}
function* watchPostsAsync() {
  yield takeEvery(PostsTypes.POSTS_REQUEST, getUserPosts, api);
}
function* watchProposalAsync() {
  yield takeEvery(ProposalTypes.PROPOSAL_REQUEST, getUserProposal, api);
}
function* watchUpdateProposalAsync() {
  yield takeEvery(ProposalTypes.PROPOSAL_UPDATE, putUserProposal, api);
}
export default function* root() {
  yield all([
    watchAuthAsync(),
    watchPostsAsync(),
    watchProposalAsync(),
    watchUpdateProposalAsync()
  ]);
}
