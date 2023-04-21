import ClassRoomRepos from "../../classRoom.repos";
import { ResponseServer } from "../../response";

export default class DeleteClassRoomService {
  constructor(private repos: ClassRoomRepos) {}

  public async delete(id: string): Promise<ResponseServer<any>> {
    try {
      const exist = await this.repos.getClassRoom(id);
      if (!exist) {
        throw new Error("Class Room not found");
      }
      await this.repos.deleteClassRoom(id);

      return {
        statusCode: 200,
        body: { message: "Class Room deleted with success" },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }
}
