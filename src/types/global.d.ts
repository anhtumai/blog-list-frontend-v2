import { DefaultRootState } from "react-redux";

declare global {
  interface NotificationState {
    message: string;
    notiType: "error" | "success";
  }
  interface RootState extends DefaultRootState {
    user: IUserWithToken | null;
    notification: NotificationState;
    blogs: IBlog[];
    users: IUser[];
  }
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
    comments: {
      content: string;
      id: string;
    }[];
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
    blogs: IUpdateBlog[];
  }
  interface IUserWithToken {
    token: string;
    username: string;
    name: string;
  }
  interface IComment {
    content: string;
    id: string;
  }
  interface ICreateComment {
    content: string;
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
