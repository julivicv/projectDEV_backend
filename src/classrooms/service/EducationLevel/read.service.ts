import EducationLevelRepos from "../../educationLevel.repos";
import { ResponseServer } from "../../response";

export default class ReadEducationLevelService {
  constructor(private repos: EducationLevelRepos) {}

  public async unique(id: string): Promise<ResponseServer<any>> {
    try {
      const result = await this.repos.getEducationLevel(id);
      if (!result) {
        throw new Error("Education level not found");
      }

      return {
        statusCode: 200,
        body: { message: result },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }

  public async all(): Promise<ResponseServer<any>> {
    try {
      const result = await this.repos.getEducationLevels();
      if (!result) {
        throw new Error("Education level not found");
      }

      return {
        statusCode: 200,
        body: { message: result },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: error.message,
      };
    }
  }
}
