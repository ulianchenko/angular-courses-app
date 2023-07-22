import { Name } from './name.model';
export interface UserEntity {
  id: number;
  token: string;
  name: Name;
  login: string;
}
