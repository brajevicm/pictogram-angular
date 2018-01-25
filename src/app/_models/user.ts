/**
 * Created by srdjanstevanovic on 24/01/18.
 */
import {IAuthority} from './authority.model';

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
  authorities?: IAuthority [];
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
  authorities: IAuthority[];
  constructor( id: number,
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  profileImage: string,
  enabled: boolean,
  createdDate: number,
  lastPasswordResetDate: number,
  authorities: IAuthority[]
) {
  }
}
