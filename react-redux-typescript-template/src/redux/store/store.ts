import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer } from "../reducers/appReducer";

const rootReducer = combineReducers({
  reducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export type RootStore = ReturnType<typeof rootReducer>;
export default store;
