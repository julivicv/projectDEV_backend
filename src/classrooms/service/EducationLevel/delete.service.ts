import { ResponseServer } from "../../response";
import EducationLevelRepos from "../../educationLevel.repos";

export default class DeleteEducationLevelService {
  constructor(private repos: EducationLevelRepos) {}

  public async delete(id: string): Promise<ResponseServer<any>> {
    try {
      const exist = await this.repos.getEducationLevel(id);
      if (!exist) {
        throw new Error("Education level not found");
      }
      await this.repos.deleteEducationLevel(id);

      return {
        statusCode: 200,
        body: { message: "Education level deleted with success" },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }
  }
}
