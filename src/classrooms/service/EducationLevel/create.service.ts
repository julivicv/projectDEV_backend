import { ResponseServer } from "../../response";
import EducationLevelRepos from "../../educationLevel.repos";
import { EducationLevelDTO } from "../../dtos/educationLevel.dto";

export default class CreateEducationLevelService {
  constructor(private repos: EducationLevelRepos) {}

  public async create(data: EducationLevelDTO): Promise<ResponseServer<any>> {
    try {
      const exist = await this.repos.getEducationLevelsByName(
        data.name as string
      );

      if (exist) {
        throw new Error("Education level already exists");
      }
      const educationLevel = await this.repos.createEducationLevel(data);
      return {
        statusCode: 200,
        body: {
          message: "Education level created with success",
          data: educationLevel,
        },
      };
    } catch (error: any) {
      return {
        statusCode: 400,
        body: { message: error.message },
      };
    }

    // call domain
    // call repository
  }
}
