import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {AuthReducer} from './slices';

const rootReducer = combineReducers({
  user: AuthReducer,
  // farmer: FarmerProfileReducer,
});

//compare with combine reducers, this does it automatically.
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
