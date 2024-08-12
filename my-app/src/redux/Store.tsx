import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";
import userReducer from './UserSlice';

export const store = configureStore({
  reducer: {
    user:userReducer,
    employee: employeeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
