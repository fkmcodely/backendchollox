import { configureStore } from '@reduxjs/toolkit'
import uiSlice from "../redux/reducers/ui";
import sessionSlice from "../redux/reducers/session";

export default configureStore({
  reducer: {
      ui: uiSlice,
      session: sessionSlice
  },
});