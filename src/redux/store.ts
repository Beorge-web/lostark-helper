import { configureStore } from '@reduxjs/toolkit';
import tableSlicer from './tableSlicer';
export const store = configureStore({
	reducer: {
		table: tableSlicer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
