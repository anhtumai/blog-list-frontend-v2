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
    case "ADD_COMMENT":
      const { blogId, comment }: { blogId: string; comment: IComment } =
        action.data;
      return state.map((blog) =>
        blog.id !== blogId
          ? blog
          : { ...blog, comments: blog.comments.concat(comment) },
      );
    default:
      return state;
  }
};

export default blogReducer;
