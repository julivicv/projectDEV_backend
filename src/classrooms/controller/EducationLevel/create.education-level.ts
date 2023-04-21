import { Request, Response } from "express";
import CreateEducationLevelService from "../../service/EducationLevel/create.service";
import EducationLevelPrismaRepos from "../../repositories/educationLevel.prisma";

export default class createEducationLevel {
  public static async create(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { name } = req.body;

    const repos = new EducationLevelPrismaRepos();
    const service = new CreateEducationLevelService(repos);
    const response = await service.create({ name });

    res.status(response.statusCode).json(response.body);
  }
}
