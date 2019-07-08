import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ProposalActions from '../redux/ProposalRedux'

export function * getUserProposal (api, action) {
  const { userID } = action
  // make the call to the api
  const response = yield call(api.getProposal, userID)

  if (response.ok) {
    const proposal = response.data
    // do data conversion here if needed
    yield put(ProposalActions.proposalSuccess(proposal))
  } else {
    yield put(ProposalActions.proposalFailure())
  }
}


export function * putUserProposal (api, action) {
  const { userID , proposalData } = action
  // make the call to the api
  const response = yield call(api.putProposal, userID, proposalData)

  if (response.ok) {
    const proposal = response.data
    // do data conversion here if needed
    yield put(ProposalActions.proposalSuccess(proposal))
  } else {
    yield put(ProposalActions.proposalFailure())
  }
}


