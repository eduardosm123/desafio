export interface IUser {
  data: {
    name: string;
    followers: number;
    following: number;
    avatar_url: string;
    bio: string;
    email?: string;
  };
  load?: boolean;
}
