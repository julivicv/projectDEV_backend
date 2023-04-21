import { ClassRoomDTO } from "./dtos/ClassRoom.dto";

export default interface ClassRoomRepos {
  createClassRoom(ClassRoom: ClassRoomDTO): Promise<ClassRoomDTO>;
  findById(id: string): Promise<ClassRoomDTO | null>;
  deleteClassRoom(id: string): Promise<void>;
  getClassRoom(id: string): Promise<ClassRoomDTO | null>;
  getClassRooms(): Promise<ClassRoomDTO[]>;
  getClassRoomsByName(name: string): Promise<ClassRoomDTO | null>;
  updateClassRoom(ClassRoom: ClassRoomDTO): Promise<ClassRoomDTO>;
}
