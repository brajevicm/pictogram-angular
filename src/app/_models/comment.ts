/**
 * Created by brajevicm on 2/06/17.
 */

export interface IComment {
  id?: number;
  user_id?: number;
  description?: string;
  user?: string;
  username?: string;
  createdDate?: number;
  enabled?: boolean;
  upvotesCount?: number;
  avatar?: string;
  post_id?: number;
  post?: string;
  flag_id?: number;
  flag?: string;
  text?: string;
  timestamp?: string;
  upvotes?: number;
  upvoted?: number;
  isActive?: boolean;
  isActiveReport?: boolean;
  isActiveRemove?: boolean;
  reports?: number;
  reported?: number;
}

export class Comment implements IComment {
  id: number;
  user_id: number;
  description: string;
  user: string;
  username: string;
  createdDate: number;
  enabled: boolean;
  upvotesCount: number;
  avatar: string;
  post_id: number;
  post: string;
  flag_id: number;
  flag: string;
  text: string;
  timestamp: string;
  upvotes: number;
  upvoted: number;
  isActive: boolean;
  isActiveReport: boolean;
  isActiveRemove: boolean;
  reports: number;
  reported: number;

  constructor(  id: number,
  user_id: number,
  description: string,
  user: string,
  username: string,
  createdDate: number,
  enabled: boolean,
  upvotesCount: number,
  avatar: string,
  post_id: number,
  post: string,
  flag_id: number,
  flag: string,
  text: string,
  timestamp: string,
  upvotes: number,
  upvoted: number,
  isActive: boolean,
  isActiveReport: boolean,
  isActiveRemove: boolean,
  reports: number,
  reported: number) {
  }
}
