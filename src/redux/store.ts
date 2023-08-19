import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // product: ,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;