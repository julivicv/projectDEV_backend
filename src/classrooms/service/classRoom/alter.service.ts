import CourseRepos from "../../course.repos";
import { ClassRoomDTO } from "../../dtos/ClassRoom.dto";
import ClassRoomRepos from "../../repositories/ClassRoom.prisma";
import { ResponseServer } from "../../response";

export default class AlterClassRoomService {
  constructor(
    private repos: ClassRoomRepos,
    private reposCourse: CourseRepos
  ) {}
  public validateData(data: ClassRoomDTO) {
    if (!data.couserId) {
      throw new Error("Couser is required");
    }
    if (!data.id) {
      throw new Error("Id is required");
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

  public async alter(data: ClassRoomDTO): Promise<ResponseServer<any>> {
    console.log(data);

    try {
      this.validateData(data);
      const existClassRoom = await this.repos.getClassRoomsByName(
        data.name as string
      );

      if (existClassRoom) {
        throw new Error("ClassRoom already exists");
      }
      const existCourse = await this.reposCourse.getCourse(data.couserId);
      if (!existCourse) {
        throw new Error("Course not found");
      }

      const exist = await this.repos.getClassRoom(data.id as string);
      if (!exist) {
        throw new Error("ClassRoom not found");
      }

      const returnValue = await this.repos.updateClassRoom(data);

      return {
        statusCode: 200,
        body: {
          message: "ClassRoom updated with success",
          data: returnValue,
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
