import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import configureStore from "./CreateStore";
import rootSaga from "../sagas/";
import ReduxPersist from "../config/ReduxPersist";

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  //nav: require("./NavigationRedux").reducer,
  auth: require("./AuthRedux").reducer,
  posts: require("./PostsRedux").reducer,
  proposal: require("./ProposalRedux").reducer
});

let finalReducers = reducers;
// If rehydration is on use persistReducer otherwise default combineReducers
if (ReduxPersist.active) {
  const persistConfig = ReduxPersist.storeConfig;
  finalReducers = persistReducer(persistConfig, reducers);
}

let { store, sagasManager, sagaMiddleware } = configureStore(
  finalReducers,
  rootSaga
);

let persistor = persistStore(store);

const getPersistor = () => persistor;
const getStore = () => store;
const getState = () => {
  return store.getState();
};

if (module.hot) {
  module.hot.accept(() => {
    const nextRootReducer = require("./").reducers;
    store.replaceReducer(nextRootReducer);

    const newYieldedSagas = require("../sagas").default;
    sagasManager.cancel();
    sagasManager.done.then(() => {
      sagasManager = sagaMiddleware(newYieldedSagas);
    });
  });
}

export { getStore, getState, getPersistor };
export default {
  getStore,
  getState,
  getPersistor
};
