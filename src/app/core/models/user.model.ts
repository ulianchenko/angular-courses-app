import { Name } from './name';
export interface UserEntity {
  id: number;
  fakeToken: string;
  name: Name;
  login: string;
  password: string;
}
