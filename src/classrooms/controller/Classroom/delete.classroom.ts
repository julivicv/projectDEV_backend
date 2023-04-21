import { Request, Response } from "express";
import ClassRoomPrismaRepos from "../../repositories/ClassRoom.prisma";
import DeleteClassRoomService from "../../service/classRoom/delete.service";

export default class DeleteClassRoom {
  public static async delete(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;

    const repos = new ClassRoomPrismaRepos();
    const service = new DeleteClassRoomService(repos);
    const response = await service.delete(id);

    res.status(response.statusCode).json(response.body);
  }
}
