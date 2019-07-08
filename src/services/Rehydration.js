import ReduxPersist from '../config/ReduxPersist'
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore } from 'redux-persist'
import StartupActions from '../redux/StartupRedux'
import DebugConfig from '../config/DebugConfig'
import Reactotron from 'reactotron-react-native'


const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion
  const startup = () => store.dispatch(StartupActions.startup())

  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion').then((localVersion) => {
    console.log("inside hydration")
    if (localVersion !== reducerVersion) {
      console.log("inside hydration if")
      if (DebugConfig.useReactotron) {
        Reactotron.display({
          name: 'PURGE',
          value: {
            'Old Version:': localVersion,
            'New Version:': reducerVersion
          },
          preview: 'Reducer Version Change Detected',
          important: true
        })
      }
      // Purge store
      persistStore(store, null, startup).purge()
      AsyncStorage.setItem('reducerVersion', reducerVersion)
    } else {
      console.log("inside hydration else")
      persistStore(store, null, startup)
    }
  }).catch(() => {
    console.log("inside hydration ctch")
    persistStore(store, null, startup)
    AsyncStorage.setItem('reducerVersion', reducerVersion)
  })
}

export default { updateReducers }
