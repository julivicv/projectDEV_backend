import { EducationLevelDTO } from "../dtos/educationLevel.dto";
import EducationLevelRepos from "../educationLevel.repos";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class EducationLevelPrismaRepos implements EducationLevelRepos {
  async getEducationLevelsByName(
    name: string
  ): Promise<EducationLevelDTO | null> {
    const result = await prisma.educationLevel.findUnique({
      where: {
        name,
      },
    });
    return result;
  }
  async createEducationLevel(
    educationLevel: EducationLevelDTO
  ): Promise<EducationLevelDTO> {
    const result = await prisma.educationLevel.create({
      data: {
        name: educationLevel.name,
      },
    });
    return result;
  }
  async deleteEducationLevel(id: string): Promise<void> {
    await prisma.educationLevel.delete({
      where: {
        id,
      },
    });
  }

  async getEducationLevel(id: string): Promise<EducationLevelDTO | null> {
    const result = await prisma.educationLevel.findUnique({
      where: {
        id,
      },
    });
    return result;
  }
  async getEducationLevels(): Promise<EducationLevelDTO[]> {
    const result = await prisma.educationLevel.findMany({});
    return result;
  }
  async updateEducationLevel(
    educationLevel: EducationLevelDTO
  ): Promise<EducationLevelDTO> {
    const result = await prisma.educationLevel.update({
      where: {
        id: educationLevel.id,
      },
      data: {
        name: educationLevel.name,
      },
    });
    return result;
  }
}
