import { configureStore } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import uiSlice from "../redux/reducers/ui";
import sessionSlice from "../redux/reducers/session";
import uploadSlice from "../redux/reducers/upload";

const reducers = combineReducers({
  ui: uiSlice,
  session: sessionSlice,
  upload: uploadSlice
});
const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export default store;