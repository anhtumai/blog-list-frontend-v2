export const userSelector = (state: RootState) => state.user;

export const notificationSelector = (state: RootState) => state.notification;

export const blogsSelector = (state: RootState) =>
  state.blogs.sort((a, b) => b.likes - a.likes);

export const usersSelector = (state: RootState) => state.users;
