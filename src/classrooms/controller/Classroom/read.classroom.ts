import { Request, Response } from "express";
import ClassRoomPrismaRepos from "../../repositories/ClassRoom.prisma";
import ReadClassRoomService from "../../service/classRoom/read.service";

export default class ReadClassRoom {
  public static async unique(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;

    const repos = new ClassRoomPrismaRepos();
    const service = new ReadClassRoomService(repos);
    const response = await service.unique(id);

    res.status(response.statusCode).json(response.body);
  }

  public static async all(req: Request, res: Response) {
    const repos = new ClassRoomPrismaRepos();
    const service = new ReadClassRoomService(repos);
    const response = await service.all();

    res.status(response.statusCode).json(response.body);
  }
}
