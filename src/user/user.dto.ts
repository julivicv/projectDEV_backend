export interface UserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  isAdmin?: boolean;
  photoFile?: string;
  isActived?: boolean;
  classId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
