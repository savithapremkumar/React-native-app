import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation';
import AuthActions from '../redux/AuthRedux'
import {Alert} from 'react-native'

export function * postAuth (api, action) {
  const { username, password } = action
  // make the call to the api
  const response = yield call(api.postAuth, username, password)

  if (response.ok) {
    const token = response.data.token
    const userID = response.data.userID
    // do data conversion here if needed
    yield put(AuthActions.authSuccess(token,userID))
    yield put(NavigationActions.navigate({ routeName: 'App' }));
  } else {
    yield put(AuthActions.authFailure())
  }
}
