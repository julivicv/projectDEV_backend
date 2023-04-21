import ClassRoomRepos from "../../classRoom.repos";
import { ResponseServer } from "../../response";

export default class ReadClassRoomService {
  constructor(private repos: ClassRoomRepos) {}

  public async unique(id: string): Promise<ResponseServer<any>> {
    try {
      const result = await this.repos.getClassRoom(id);
      if (!result) {
        throw new Error("Class Room level not found");
      }

      return {
        statusCode: 200,
        body: { message: result },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }

  public async all(): Promise<ResponseServer<any>> {
    try {
      const result = await this.repos.getClassRooms();
      if (!result) {
        throw new Error("ClassRoom level not found");
      }

      return {
        statusCode: 200,
        body: { message: result },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: error.message,
      };
    }
  }
}
