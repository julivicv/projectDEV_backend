import { Request, Response } from "express";
import ClassRoomPrismaRepos from "../../repositories/ClassRoom.prisma";
import AlterClassRoomService from "../../service/classRoom/alter.service";
import CoursePrismaRepos from "../../repositories/Course.prisma";

export default class AlterClassRoom {
  public static async alter(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;
    const { name, lunch, couserId } = req.body;

    const repos = new ClassRoomPrismaRepos();
    const reposCourse = new CoursePrismaRepos();

    const service = new AlterClassRoomService(repos, reposCourse);
    const response = await service.alter({
      couserId: couserId,
      id: id,
      name: name,
      lunch: lunch,
    });

    res.status(response.statusCode).json(response.body);
  }
}
