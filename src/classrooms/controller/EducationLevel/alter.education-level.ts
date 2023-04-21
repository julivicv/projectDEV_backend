import { Request, Response } from "express";
import AlterEducationLevelService from "../../service/EducationLevel/alter.service";
import EducationLevelPrismaRepos from "../../repositories/educationLevel.prisma";

export default class AlterEducationLevel {
  public static async alter(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;
    const { name } = req.body;

    const input = {
      id: id,
      name: name,
    };

    const repos = new EducationLevelPrismaRepos();
    const service = new AlterEducationLevelService(repos);
    const response = await service.alter(input);

    res.status(response.statusCode).json(response.body);
  }
}
