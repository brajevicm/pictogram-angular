/**
 * Created by brajevicm on 2/06/17.
 */

export interface IUser {
  id?: number;
  role_id?: number;
  role?: string;
  flag_id?: number;
  flag?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  image?: string;
  token?: string;
  profile_image?: string;
  profileImage?: string;
}

export class User implements IUser {
  id: number;
  role_id: number;
  role: string;
  flag_id: number;
  flag: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  token: string;
  profile_image: string;
  profileImage: string;
  constructor(id: number,
              role_id: number,
              role: string,
              flag_id: number,
              flag: string,
              username: string,
              password: string,
              firstname: string,
              lastname: string,
              email: string,
              image: string,
              token: string,
              profile_image: string,
              profileImage: string) {
  }
}
