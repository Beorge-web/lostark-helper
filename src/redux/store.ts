import { configureStore } from '@reduxjs/toolkit';
import popupSlicer from './popupSlicer';
import tableSlicer from './tableSlicer';
export const store = configureStore({
	reducer: {
		table: tableSlicer,
		popup: popupSlicer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
