import CourseRepos from "../../course.repos";
import { ResponseServer } from "../../response";

export default class DeleteCourseService {
  constructor(private repos: CourseRepos) {}

  public async delete(id: string): Promise<ResponseServer<any>> {
    try {
      const exist = await this.repos.getCourse(id);
      if (!exist) {
        throw new Error("Education level not found");
      }
      await this.repos.deleteCourse(id);

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
