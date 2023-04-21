import CourseRepos from "../../course.repos";
import { ResponseServer } from "../../response";

export default class ReadCourseService {
  constructor(private repos: CourseRepos) {}

  public async unique(id: string): Promise<ResponseServer<any>> {
    try {
      const result = await this.repos.getCourse(id);
      if (!result) {
        throw new Error("Course level not found");
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
      const result = await this.repos.getCourses();
      if (!result) {
        throw new Error("Course level not found");
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
