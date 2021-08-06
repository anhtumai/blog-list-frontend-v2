declare global {
  interface IBlog {
    likes: number;
    title: string;
    author: string;
    url: string;
    id: string;
    user: {
      username: string;
      name: string;
      id: string;
    };
  }
  interface ICreateBlog {
    title: string;
    author: string;
    url: string;
    likes?: number;
  }
  interface IUpdateBlog {
    id: string;
    title: string;
    author: string;
    url: string;
    likes: number;
  }
  interface IUser {
    username: string;
    name: string;
    id: string;
    blogs: IBlog[];
  }
  interface IUserWithToken {
    token: string;
    username: string;
    name: string;
  }
  interface NotificationAction {
    type: "SHOW" | "CLEAR";
    data?: {
      message: string;
    };
  }
  interface Action {
    type: string;
    data?: any;
  }
}

export {};
