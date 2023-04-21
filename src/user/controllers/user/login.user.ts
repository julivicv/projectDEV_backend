import { Request, Response } from "express";
import UserPrismaRepos from "../../repositories/user.prisma";
import LoginUserService from "../../services/user/login.service";

export default class LoginUser {
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const repos = new UserPrismaRepos();
    const service = new LoginUserService(repos);
    const response = await service.execute({
      email,
      password,
    });

    res.status(response.statusCode).json(response.body);
  }
}
