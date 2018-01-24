/**
 * Created by srdjanstevanovic on 24/01/18.
 */

export interface IUser {
  id?: number;
  username?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  profileImage?: string;
  enabled?: boolean;
  createdDate?: number;
  lastPasswordResetDate?: number;
}
export class User implements IUser {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  enabled: boolean;
  createdDate: number;
  lastPasswordResetDate: number;
  constructor( id: number,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  profileImage: string,
  enabled: boolean,
  createdDate: number,
  lastPasswordResetDate: number
) {
  }
}
