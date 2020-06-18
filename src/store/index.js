import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import ReduxLogger from "redux-logger";
import reducers from "./reducers";
const middleWares = [ReduxThunk];
if (process.env.NODE_ENV === "development") {
  middleWares.push(ReduxLogger);
}
export default createStore(reducers, applyMiddleware(...middleWares));
