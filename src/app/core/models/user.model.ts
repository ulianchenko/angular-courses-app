import { Name } from './name.model';
export interface UserEntity {
  id: number;
  fakeToken: string;
  name: Name;
  login: string;
  password: string;
}
