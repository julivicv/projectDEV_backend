import { EducationLevelDTO } from "../../dtos/educationLevel.dto";
import EducationLevelRepos from "../../educationLevel.repos";
import { ResponseServer } from "../../response";

export default class AlterEducationLevelService {
  constructor(private repos: EducationLevelRepos) {}
  public validateData(data: EducationLevelDTO) {
    if (!data.id) {
      throw new Error("Id is required");
    }
    if (!data.name) {
      throw new Error("Name is required");
    }
    if (!data.name.trim()) {
      throw new Error("Name is required");
    }
    if (data.name.length > 100) {
      throw new Error("Name is too long");
    }
    if (data.name.length < 3) {
      throw new Error("Name is too short");
    }
  }

  public async alter(data: EducationLevelDTO): Promise<ResponseServer<any>> {
    try {
      this.validateData(data);
      const exist = await this.repos.getEducationLevel(data.id as string);
      if (!exist) {
        throw new Error("Education level not found");
      }

      const returnValue = await this.repos.updateEducationLevel(data);

      return {
        statusCode: 200,
        body: {
          message: "Education level updated with success",
          data: returnValue,
        },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }
}
