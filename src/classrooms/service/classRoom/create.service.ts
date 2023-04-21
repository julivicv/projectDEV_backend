import { ResponseServer } from "../../response";
import { ClassRoomDTO } from "../../dtos/ClassRoom.dto";
import ClassRoomRepos from "../../classRoom.repos";
import CourseRepos from "../../course.repos";

export default class CreateClassRoomService {
  constructor(
    private repos: ClassRoomRepos,
    private reposCourse: CourseRepos
  ) {}

  public validateData(data: ClassRoomDTO) {
    if (!data.couserId) {
      throw new Error("Couser is required");
    }
    if (!data.name) {
      throw new Error("Name is required");
    }
    if (!data.name.trim()) {
      throw new Error("Name is required");
    }
    if (data.name.length > 100) {
      throw new Error("Name is too long");
    }
    if (data.name.length < 3) {
      throw new Error("Name is too short");
    }
  }

  public async create(data: ClassRoomDTO): Promise<ResponseServer<any>> {
    try {
      this.validateData(data);
      const existCourse = await this.reposCourse.getCourse(
        data.couserId as string
      );
      if (!existCourse) {
        throw new Error("Course not found");
      }

      const exist = await this.repos.getClassRoomsByName(data.name as string);

      if (exist) {
        throw new Error("ClassRoom already exists");
      }
      const input: ClassRoomDTO = {
        name: data.name,
        couserId: data.couserId,
        lunch: JSON.stringify(data.lunch),
      };
      const ClassRoom = await this.repos.createClassRoom(input);
      return {
        statusCode: 200,
        body: {
          message: "ClassRoom created with success",
          data: ClassRoom,
        },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }
}
