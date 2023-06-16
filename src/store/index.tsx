import { configureStore } from '@reduxjs/toolkit';
import formReducer from './form/reducer';
import mainReducer from './main/reducer';

export const store = configureStore({
  reducer: {
    main: mainReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
