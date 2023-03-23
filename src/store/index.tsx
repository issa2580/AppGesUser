import { configureStore } from "@reduxjs/toolkit";
/* import reducer */
//

export const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;