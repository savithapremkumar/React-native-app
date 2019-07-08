import immutablePersistenceTransform from "../services/ImmutablePersistenceTransform";
import AsyncStorage from "@react-native-community/async-storage";

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
const REDUX_PERSIST = {
  active: true,
  reducerVersion: "1.1",
  storeConfig: {
    key: "primary",
    storage: AsyncStorage,
    // Reducer keys that you do NOT want stored to persistence here.
    blacklist: ["proposal"],
    // Optionally, just specify the keys you DO want stored to persistence.
    // An empty array means 'don't store any reducers' -> infinitered/ignite#409
    // whitelist: [],
    transforms: [immutablePersistenceTransform]
    //Transforms allow you to customize the state object that gets persisted and rehydrated.
    //When the state object gets persisted, it first gets serialized with JSON.stringify().
    //If parts of your state object are not mappable to JSON objects,
    //the serialization process may transform these parts of your state in unexpected ways.
  }
};

export default REDUX_PERSIST;
