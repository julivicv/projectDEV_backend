import { Request, Response } from "express";
import CreateCourseService from "../../service/course/create.service";
import CoursePrismaRepos from "../../repositories/Course.prisma";
import EducationLevelPrismaRepos from "../../repositories/educationLevel.prisma";

export default class createCourse {
  public static async create(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { name, educationLevelId } = req.body;

    const repos = new CoursePrismaRepos();
    const reposEducationLevel = new EducationLevelPrismaRepos();
    const service = new CreateCourseService(repos, reposEducationLevel);
    const response = await service.create({ name, educationLevelId });

    res.status(response.statusCode).json(response.body);
  }
}
