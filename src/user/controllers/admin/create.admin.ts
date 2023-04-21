import { Request, Response } from "express";
import ClassRoomPrismaRepos from "../../../classrooms/repositories/ClassRoom.prisma";
import UserPrismaRepos from "../../repositories/user.prisma";
import CreateAdminService from "../../services/admin/create.service";

export default class CreateAdmin {
  public static async create(req: Request, res: Response) {
    const { name, dateOfBirth, email, password, photoFile, classId } = req.body;

    const repos = new UserPrismaRepos();
    const classRoomRepos = new ClassRoomPrismaRepos();
    const service = new CreateAdminService(repos, classRoomRepos);
    const response = await service.create({
      isActived: true,
      name,
      dateOfBirth,
      email,
      password,
      photoFile,
      isAdmin: true,
      classId,
    });

    res.status(response.statusCode).json(response.body);
  }
}
