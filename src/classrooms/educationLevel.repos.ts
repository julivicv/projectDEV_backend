import { EducationLevelDTO } from "./dtos/educationLevel.dto";

export default interface EducationLevelRepos {
  createEducationLevel(
    educationLevel: EducationLevelDTO
  ): Promise<EducationLevelDTO>;
  deleteEducationLevel(id: string): Promise<void>;
  getEducationLevel(id: string): Promise<EducationLevelDTO | null>;
  getEducationLevels(): Promise<EducationLevelDTO[]>;
  getEducationLevelsByName(name: string): Promise<EducationLevelDTO | null>;
  updateEducationLevel(
    educationLevel: EducationLevelDTO
  ): Promise<EducationLevelDTO>;
}
