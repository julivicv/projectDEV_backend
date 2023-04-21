import { Router } from "express";
import {
  AlterCourse,
  DeleteCourse,
  ReadCourse,
  createCourse,
} from "../controller/Course";
import Auth from "../../infra/middleware/auth";

const CourseRoutes = Router();

// EDUCATION LEVEL ROUTES
CourseRoutes.get("/", Auth, ReadCourse.all)
  .get("/:id", Auth, ReadCourse.unique)
  .post("/create/", Auth, createCourse.create)
  .put("/alter/:id", Auth, AlterCourse.alter)
  .delete("/delete/:id", Auth, DeleteCourse.delete);

export default CourseRoutes;
