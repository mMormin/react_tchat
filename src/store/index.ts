import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducers/chat';
import loginReducer from './reducers/login';

const store = configureStore({
  reducer: {
    chat: chatReducer,
    login: loginReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
