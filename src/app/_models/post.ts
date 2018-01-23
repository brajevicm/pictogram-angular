/**
 * Created by brajevicm on 2/06/17.
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
  commentsCount?: number;
  upvotesCount?: number;
  user_id?: number;
  flag_id?: number;
  timestamp?: string;
  upvotes?: number;
  comments?: number;
  upvoted?: number;
  isActivePost?: boolean;
  isActiveComment?: boolean;
  isActiveCommentBox?: boolean;
  isActiveReport?: boolean;
  isActiveRemove?: boolean;
  reports?: number;
  reported?: number;
}
export class Post implements IPost {
  id: number;
  user_id: number;
  username: string;
  flag_id: number;
  title: string;
  postImage: string;
  timestamp: string;
  upvotes: number;
  comments: number;
  upvoted: number;
  enabled: boolean;
  description: string;
  createdDate: number;
  commentsCount: number;
  upvotesCount: number;
  isActivePost: boolean;
  isActiveComment: boolean;
  isActiveCommentBox: boolean;
  isActiveReport: boolean;
  isActiveRemove: boolean;
  reports: number;
  reported: number;
  upvotedByCurrentUser: boolean;
  reportedByCurrentUser: boolean;

  constructor(id: number,
  user_id: number,
  username: string,
  flag_id: number,
  title: string,
  postImage: string,
  timestamp: string,
  upvotes: number,
  comments: number,
  upvoted: number,
  enabled: boolean,
  description: string,
  createdDate: number,
  commentsCount: number,
  upvotesCount: number,
  isActivePost: boolean,
  isActiveComment: boolean,
  isActiveCommentBox: boolean,
  isActiveReport: boolean,
  isActiveRemove: boolean,
  reports: number,
  reported: number,
  upvotedByCurrentUser: boolean,
  reportedByCurrentUser: boolean
  ) {
  }
}
