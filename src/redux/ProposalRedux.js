import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  proposalRequest: ['userID'],
  proposalUpdate: ['userID','proposaldata'],
  proposalSuccess: ['proposaldata'],
  proposalFailure: null
})

export const ProposalTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  processing: null,
  error: null,
  proposaldata: null
})

/* ------------- Selectors ------------- */

export const ProposalSelectors = {
  selectProposal: state => state.proposal.proposaldata
}

/* ------------- Reducers ------------- */

// request the proposal data for a user
export const request = (state, { userID }) =>
  state.merge({ processing: true, userID,  proposaldata: null })

// set the proposal data for a user
export const update = (state, { userID, proposaldata }) =>
state.merge({ processing: true,  userID,  proposaldata })


// successful proposal data lookup/ update
export const success = (state, action) => {
  const { proposaldata } = action
  return state.merge({ processing: false, error: null, proposaldata })
}

// failed to get/set the proposal data
export const failure = (state) =>
  state.merge({ processing: false, error: true, proposaldata: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PROPOSAL_REQUEST]: request,
  [Types.PROPOSAL_UPDATE]: update,
  [Types.PROPOSAL_SUCCESS]: success,
  [Types.PROPOSAL_FAILURE]: failure
})
