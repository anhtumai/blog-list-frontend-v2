const blogReducer = (state: IBlog[] = [], action: Action) => {
  switch (action.type) {
    case "CREATE_BLOG":
      return [...state, action.data];
    case "LIKE_BLOG": {
      const { id } = action.data;
      return state.map((blog) =>
        blog.id !== id ? blog : { ...blog, likes: blog.likes + 1 },
      );
    }
    case "DELETE_BLOG": {
      const { id } = action.data;
      return state.filter((blog) => blog.id !== id);
    }
    case "INIT_BLOGS":
      return action.data;
    default:
      return state;
  }
};

export default blogReducer;
