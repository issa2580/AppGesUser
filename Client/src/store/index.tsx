import { configureStore } from "@reduxjs/toolkit";
import user from './app/user'

export const store = configureStore({
    reducer: {
      user,
      tst,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;