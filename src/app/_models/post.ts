
/**
 * Created by srdjanstevanovic on 22/01/18.
 */


export interface IPost {
  id?: number;
  title?: string;
  description?: string;
  postImage?: string;
  createdDate?: number;
  enabled?: boolean;
  upvotedPostByCurrentUser?: boolean;
  reportedPostByCurrentUser?: boolean;
  username?: string;
  userId?: number;
  userProfileImage?: string;
  commentsCount?: number;
  upvotesCount?: number;
  reportsCount?: number;
  isActiveComment?: boolean;
  isActivePost?: boolean;
  isActiveReport?: boolean;
}

export class Post implements IPost {
  id: number;
  title: string;
  description: string;
  postImage: string;
  createdDate: number;
  enabled: boolean;
  upvotedPostByCurrentUser: boolean;
  reportedPostByCurrentUser: boolean;
  username: string;
  userId: number;
  userProfileImage: string;
  commentsCount: number;
  upvotesCount: number;
  reportsCount: number;
  isActiveComment: boolean;
  isActivePost: boolean;
  isActiveReport: boolean;

  constructor(id: number,
  title: string,
  description: string,
  postImage: string,
  createdDate: number,
  enabled: boolean,
  upvotedPostByCurrentUser: boolean,
  reportedPostByCurrentUser: boolean,
  username: string,
  userId: number,
  userProfileImage: string,
  commentsCount: number,
  upvotesCount: number,
  reportsCount: number,
  isActiveComment: boolean,
  isActivePost: boolean,
  isActiveReport: boolean
) {
  }
}
