import { PrismaClient } from "@prisma/client";
import { ClassRoomDTO } from "../dtos/ClassRoom.dto";
import ClassRoomRepos from "../classRoom.repos";

const prisma = new PrismaClient();

export default class ClassRoomPrismaRepos implements ClassRoomRepos {
  async findById(id: string): Promise<ClassRoomDTO | null> {
    const result = await prisma.classRoom.findUnique({
      where: {
        id,
      },
    });
    return result;
  }

  async getClassRoomsByName(name: string): Promise<ClassRoomDTO | null> {
    const result = await prisma.classRoom.findUnique({
      where: {
        name,
      },
    });
    return result;
  }
  async createClassRoom(ClassRoom: ClassRoomDTO): Promise<ClassRoomDTO> {
    const result = await prisma.classRoom.create({
      data: {
        name: ClassRoom.name,
        couserId: ClassRoom.couserId,
        lunch: ClassRoom.lunch,
      },
    });
    return result;
  }
  async deleteClassRoom(id: string): Promise<void> {
    await prisma.classRoom.delete({
      where: {
        id,
      },
    });
  }

  async getClassRoom(id: string): Promise<ClassRoomDTO | null> {
    const result = await prisma.classRoom.findUnique({
      where: {
        id,
      },
    });
    return result;
  }
  async getClassRooms(): Promise<ClassRoomDTO[]> {
    const result = await prisma.classRoom.findMany({
      include: {
        Couser: true,
      },
    });
    return result;
  }
  async updateClassRoom(ClassRoom: ClassRoomDTO): Promise<ClassRoomDTO> {
    const result = await prisma.classRoom.update({
      where: {
        id: ClassRoom.id,
      },
      data: {
        name: ClassRoom.name,
        couserId: ClassRoom.couserId,
        lunch: ClassRoom.lunch,
      },
    });

    return result;
  }
}
