export interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  name: string;
  company: string;
  location: string;
}

export type IUserDTO = Omit<IUser, 'id' | 'node_id' | 'avatar_url'>;
