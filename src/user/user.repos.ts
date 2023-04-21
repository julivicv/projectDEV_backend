import { UserDTO } from "./user.dto";

export default interface UserRepos {
  create(data: UserDTO): Promise<UserDTO>;
  update(data: UserDTO): Promise<UserDTO>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<UserDTO | null>;
  findByEmail(email: string): Promise<UserDTO | null>;
  findAll(): Promise<UserDTO[]>;
}
