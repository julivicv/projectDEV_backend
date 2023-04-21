import { Request, Response } from "express";
import DeleteEducationLevelService from "../../service/EducationLevel/delete.service";
import EducationLevelPrismaRepos from "../../repositories/educationLevel.prisma";

export default class DeleteEducationLevel {
  public static async delete(req: Request, res: Response) {
    if (!req.user.isAdmin) {
      res.status(400).json({ message: "unauthorized for this function" });
    }
    const { id } = req.params;

    const repos = new EducationLevelPrismaRepos();
    const service = new DeleteEducationLevelService(repos);
    const response = await service.delete(id);

    res.status(response.statusCode).json(response.body);
  }
}
