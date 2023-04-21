import { Request, Response } from "express";
import ClassRoomPrismaRepos from "../../repositories/ClassRoom.prisma";
import CreateClassRoomService from "../../service/classRoom/create.service";
import CoursePrismaRepos from "../../repositories/Course.prisma";

export default class createClassRoom {
  public static async create(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { name, couserId, lunch } = req.body;

    const repos = new ClassRoomPrismaRepos();
    const reposCourse = new CoursePrismaRepos();
    const service = new CreateClassRoomService(repos, reposCourse);
    const response = await service.create({ name, couserId, lunch });

    res.status(response.statusCode).json(response.body);
  }
}
