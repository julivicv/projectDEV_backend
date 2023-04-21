import { Request, Response } from "express";
import CoursePrismaRepos from "../../repositories/Course.prisma";
import ReadCourseService from "../../service/course/read.service";

export default class ReadCourse {
  public static async unique(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;

    const repos = new CoursePrismaRepos();
    const service = new ReadCourseService(repos);
    const response = await service.unique(id);

    res.status(response.statusCode).json(response.body);
  }

  public static async all(req: Request, res: Response) {
    const repos = new CoursePrismaRepos();
    const service = new ReadCourseService(repos);
    const response = await service.all();

    res.status(response.statusCode).json(response.body);
  }
}
