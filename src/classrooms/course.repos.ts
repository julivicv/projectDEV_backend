import { CourseDTO } from "./dtos/Course.dto";

export default interface CourseRepos {
  createCourse(Course: CourseDTO): Promise<CourseDTO>;
  deleteCourse(id: string): Promise<void>;
  getCourse(id: string): Promise<CourseDTO | null>;
  getCourses(): Promise<CourseDTO[]>;
  getCoursesByName(name: string): Promise<CourseDTO | null>;
  updateCourse(Course: CourseDTO): Promise<CourseDTO>;
}
