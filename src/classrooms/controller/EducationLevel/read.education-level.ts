import { Request, Response } from "express";
import ReadEducationLevelService from "../../service/EducationLevel/read.service";
import EducationLevelPrismaRepos from "../../repositories/educationLevel.prisma";

export default class ReadEducationLevel {
  public static async unique(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;

    const repos = new EducationLevelPrismaRepos();
    const service = new ReadEducationLevelService(repos);
    const response = await service.unique(id);

    res.status(response.statusCode).json(response.body);
  }

  public static async all(req: Request, res: Response) {
    const repos = new EducationLevelPrismaRepos();
    const service = new ReadEducationLevelService(repos);
    const response = await service.all();

    res.status(response.statusCode).json(response.body);
  }
}
