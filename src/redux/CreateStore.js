import { createStore, applyMiddleware, compose } from 'redux'
//import ReactotronConfig from '../config/ReactotronConfig'
import Rehydration from '../services/Rehydration'
import ReduxPersist from '../config/ReduxPersist'
import Config from '../config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import ScreenTracking from './ScreenTrackingMiddleware'
import { appNavigatorMiddleware } from '../navigation/ReduxNavigation'
import Reactotron from 'reactotron-react-native'
import StartupActions from './StartupRedux'
import { composeWithDevTools } from 'redux-devtools-extension';



// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */
 // middleware.push(appNavigatorMiddleware)

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ?  Reactotron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  //const createAppropriateStore = Config.useReactotron ? Reactotron.createStore : createStore
  
  const store = Config.useReactotron ? createStore(rootReducer, StartupActions, compose(...enhancers, Reactotron.createEnhancer())) : createStore(rootReducer, {}, composeWithDevTools(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware
  }
}
