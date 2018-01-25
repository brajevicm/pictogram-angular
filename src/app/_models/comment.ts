/**
 * Created by brajevicm on 2/06/17.
 */

export interface IComment {
  id?: number;
  description?: string;
  createdDate?: number;
  enabled?: boolean;
  upvotedCommentByCurrentUser?: boolean;
  reportedCommentByCurrentUser?: boolean;
  username?: string;
  upvotesCount?: number;
  reportsCount?: number;
  userProfileImage?: string;
  userId?: number;
}

export class Comment implements IComment {
  id: number;
  description: string;
  createdDate: number;
  enabled: boolean;
  upvotedCommentByCurrentUser: boolean;
  reportedCommentByCurrentUser: boolean;
  username: string;
  upvotesCount: number;
  reportsCount: number;
  userProfileImage: string;
  userId: number;
  constructor(   id: number,
  description: string,
  createdDate: number,
  enabled: boolean,
  upvotedCommentByCurrentUser: boolean,
  reportedCommentByCurrentUser: boolean,
  username: string,
  upvotesCount: number,
  reportsCount: number,
  userProfileImage: string,
  userId: number
) {

  }
}
