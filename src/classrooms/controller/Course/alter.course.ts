import { Request, Response } from "express";
import CoursePrismaRepos from "../../repositories/Course.prisma";
import AlterCourseService from "../../service/course/alter.service";

export default class AlterCourse {
  public static async alter(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;
    const { name, educationLevelId } = req.body;

    const input = {
      id: id,
      name: name,
      educationLevelId: educationLevelId,
    };

    const repos = new CoursePrismaRepos();
    const service = new AlterCourseService(repos);
    const response = await service.alter(input);

    res.status(response.statusCode).json(response.body);
  }
}
