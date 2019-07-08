import { put, select } from 'redux-saga/effects'
import AuthActions, { AuthSelectors } from '../redux/AuthRedux'
import { is } from 'ramda'
import Reactotron from 'reactotron-react-native'


// exported to make available for tests
export const selectToken = AuthSelectors.selectToken

// process STARTUP actions
export function * startup (action) {
  if (__DEV__ && Reactotron) {
    // straight-up string logging
    Reactotron.log('Hello, I\'m an example of how to log via Reactotron.')

    // logging an object for better clarity
    Reactotron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectToken
    })

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true }
    subObject.circularDependency = subObject // osnap!
    Reactotron.display({
      name: '🔥 IGNITE 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectToken
      }
    })
  }
  const token = yield select(selectToken)
  // only get if we don't have it yet
  if (!is(String, token)) {
    yield put(AuthActions.authRequest('test','test'))
  }
}
