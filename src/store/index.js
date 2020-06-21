import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";

import ReduxLogger from "redux-logger";
import reducers from "./reducers";
const middleWares = [ReduxThunk];
if (process.env.NODE_ENV === "development") {
  middleWares.push(ReduxLogger);
}

export const store = createStore(reducers, applyMiddleware(...middleWares));

export const persistor = persistStore(store);

export default { store, persistStore };
