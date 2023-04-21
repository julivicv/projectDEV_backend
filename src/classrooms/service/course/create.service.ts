import { ResponseServer } from "../../response";
import { CourseDTO } from "../../dtos/Course.dto";
import CourseRepos from "../../course.repos";
import EducationLevelRepos from "../../educationLevel.repos";

export default class CreateCourseService {
  constructor(
    private repos: CourseRepos,
    private reposEducationLevel: EducationLevelRepos
  ) {}
  public validateData(data: CourseDTO) {
    if (!data.educationLevelId) {
      throw new Error("Education level is required");
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
  public async create(data: CourseDTO): Promise<ResponseServer<any>> {
    try {
      this.validateData(data);
      const existEducationLevel =
        await this.reposEducationLevel.getEducationLevel(
          data.educationLevelId as string
        );
      if (!existEducationLevel) {
        throw new Error("Education level not found");
      }

      const exist = await this.repos.getCoursesByName(data.name as string);

      if (exist) {
        throw new Error("Course already exists");
      }
      const Course = await this.repos.createCourse(data);
      return {
        statusCode: 200,
        body: {
          message: "Course created with success",
          data: Course,
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
