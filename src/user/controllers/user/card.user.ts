import { Request, Response } from "express";
import UserPrismaRepos from "../../repositories/user.prisma";
import ClassRoomPrismaRepos from "../../../classrooms/repositories/ClassRoom.prisma";
import CardUserService from "../../services/user/card.service";

export default class CardUser {
  public static async view(req: Request, res: Response) {
    const repos = new UserPrismaRepos();
    const service = new CardUserService(repos);
    const response = await service.execute(req.params.id);
    res.status(response.statusCode).json(response.body);
  }
}
