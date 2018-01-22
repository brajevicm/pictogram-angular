/**
 * Created by brajevicm on 2/06/17.
 */

export interface IPost {
  id?: number;
  user_id?: number;
  username?: string;
  flag_id?: number;
  title?: string;
  postImage?: string;
  timestamp?: string;
  upvotes?: number;
  comments?: number;
  upvoted?: number;
  enabled?: boolean;
  description?: string;
  createdDate?: number;
  commentsCount?: number;
  upvotesCount?: number;
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
  reported: number
  ) {
  }
}
