import { Request, Response } from "express";
import DeleteCourseService from "../../service/course/delete.service";
import CoursePrismaRepos from "../../repositories/Course.prisma";

export default class DeleteCourse {
  public static async delete(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;

    const repos = new CoursePrismaRepos();
    const service = new DeleteCourseService(repos);
    const response = await service.delete(id);

    res.status(response.statusCode).json(response.body);
  }
}
